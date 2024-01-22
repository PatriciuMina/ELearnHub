require 'uri'
require 'csv'
include ActionController::Live
class UsersController < ApplicationController
  before_action :authenticate_user!
  # before_action :restrict_access

  def user_profile
    unless params[:user_id].nil?
      @user = User.where(id: params[:user_id]).first
    else
      @user = User.where(id: current_user.id).first
    end
    @courses = Course.where(school_id: @user.school_id)
    @enrolls = Enrollment.where(user_id: @user.id)
    @my_courses = Array.new
    @courses.each do |c|
      @enrolls.each do |e|
        if c.id == e.course_id
          @my_courses.push(c)
        end
      end
    end
    @groups = Group.where(school_id: @user.school_id)
    @enrolls_groups = GroupEnrollment.where(user_id: @user.id)
    @my_groups = Array.new
    @groups.each do |c|
      @enrolls_groups.each do |e|
        if c.id == e.group_id
          @my_groups.push(c)
        end
      end
    end
    @my_courses = @my_courses.slice(0, 5)
    @my_groups = @my_groups.slice(0, 3)
    @my_notifications = Notification.where(user_id: @user.id).last(5)
    @my_messages = Message.where(user_id: @user.id).last(8)
  end

  def index
    @desired_columns = [:id, :name, :email, :created_at, :domain, :role, :stripe_customer_id]
    @filtered_columns = User.column_names.select { |column_name| @desired_columns.include?(column_name.to_sym)}
    @users = User.where(domain: current_user.domain).paginate(page: params[:page])
  end

  def new
    @user = User.new
    @subdomain = request.subdomains(0).first
    @school = School.where(domain: @subdomain).first
  end

  def import_users
    file = params[:file]
    ImportUserJob.perform_async(file.path, current_user.domain, current_user.school_id)
    file.close
    redirect_to root_path
  end

  def export_users
    respond_to do |format|
      format.csv { send_data ExportUserJob.perform_async(current_user.domain, current_user.email), filename: "Users.csv" }
    end
    #redirect_to root_path
  end


  def export_users_conditional
    @desired_columns = [:id, :name, :email, :created_at, :domain, :role, :stripe_customer_id]
    @filtered_columns = User.column_names.select { |column_name| @desired_columns.include?(column_name.to_sym)}
    selected_columns = params[:selected_columns] || []
    respond_to do |format|
      format.html { render :template => 'users/export_users_conditional'}
      format.csv { send_data ExportUserConditionalJob.perform_async(selected_columns), filename: "Users_conditional.csv" }
    end
    #redirect_to root_path
  end

  def report_users
    selected_columns = params[:selected_columns] || []
    filter_first = params[:filter_first]|| []
    filter_second = params[:filter_second] || []
    filter_third = params[:filter_third] || []
    sort_columns = params[:sort_columns] || []
    description = params[:description] || []
    respond_to do |format|
      format.html { render :template => 'users/report_users'}
      format.csv { send_data ReportUserJob.perform_async(selected_columns, filter_first.as_json, filter_second.as_json, filter_third.as_json, sort_columns, description.as_json), filename: "Report_user.csv" }
    end
  end
  def create
    @user = User.new(user_params)
    #binding.pry
    if @user.save
      redirect_to users_admin_index_path(page: 1), alert: "User created successfully."
    else
      redirect_to new_users_admin_path, alert: "Error creating user."
    end
  end
  def show
    @user = User.find(params[:id])
    @current_user = current_user
    @rooms = Room.public_rooms
    @users = User.all
    @room = Room.new
    @message = Message.new
    @room_name = get_name(@user, @current_user)
    @single_room = Room.where(name: @room_name).first || Room.create_private_room([@user, @current_user], @room_name)
    @messages = @single_room.messages
    render "rooms/index"
  end
  def edit
    @user = User.find(params[:id])
    @subdomain = request.subdomains(0).first
    @school = School.where(domain: @subdomain).first
  end

  def update
    @user = User.find(params[:id])
    if @user.update(course_params)
      redirect_to users_admin_index_path(page: 1)
    else
      redirect_to edit_users_admin_path
    end
  end

  def destroy
    @user = User.destroy(params[:id])
    redirect_to users_admin_index_path(page: 1)
  end

  # def restrict_access
  #   if current_user.domain != request.subdomains(0).first
  #     reset_session
  #     redirect_to root_path and nil
  #   end
  # end




  def user_params
    params.require(:user).permit(:name, :email, :domain, :school_id, :role, :password, :password_confirmation, :file)
  end

  private
  def get_name(user1, user2)
    users = [user1, user2].sort
    "private_#{users[0].id}_#{users[1].id}"
  end

end