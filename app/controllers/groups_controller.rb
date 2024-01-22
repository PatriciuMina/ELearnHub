class GroupsController < ApplicationController
  before_action :authenticate_user!
  #before_action :check_enrolled,  only: :show

  def index
    @groups=Group.where(school_id: current_user.school_id,).paginate(page: params[:page])
    @group_enrolls = GroupEnrollment.where.not(user_id: current_user.id)
  end

  def show
    @group = Group.find(params[:id])
  end

  def new
    @group = Group.new
  end

  def my_groups
    @groups= Group.all
    @group_enrolls=GroupEnrollment.where(user_id: current_user.id)
  end

  def enroll_users
    if current_user.role != 'student'
      @group = Group.find(params[:id])
      @group_enrolls = GroupEnrollment.where(group_id: @group.id)
      @users = User.where(role: 'student')
      @group_enrolls.each do |enroll|
        @users = @users.where.not(id: enroll.user_id)
      end
    end
  end

  def save_enroll_users
    ids = params[:users_ids]
    @group = Group.find(params[:id])
    ids.each do |stud|
      @group_enroll = GroupEnrollment.new(user_id: stud, group_id: @group.id)
      @group_enroll.save(:validate => false)
    end
    redirect_to '/group/'+@group.id.to_s+"/enrolled"
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      #create_notification
      redirect_to "/groups/"+@group.id.to_s, alert: "Group created successfully."
    else
      redirect_to groups_path, alert: "Error creating Group."
    end
  end

  def edit
    @group = Group.find(params[:id])
  end

  def update
    @group = Group.find(params[:id])
    if @group.update(group_params)
      redirect_to groups_path
    else
      redirect_to edit_course_path
    end
  end

  def check_enrolled
    @group = Group.find(params[:id])
    @group_enroll = GroupEnrollment.where(user_id: current_user.id, group_id: @group.id).first
    unless @group_enroll.present?
      redirect_to root_path
    end
  end

  # def create_notification
  #   @users = User.all
  #   @users.each do |notification|
  #     @on_click_url = "/courses/"
  #     @notification = Notification.new(title: "New Course",
  #                                      content:"A new course called "+@course.name.to_s+" has been added",
  #                                      on_click_url:@on_click_url,
  #                                      user_id:notification.id)
  #     @notification.save
  #   end
  # end

  def enrollment_params
    params.require(:users_ids).permit(:users_ids)
  end

  def group_params
    params.require(:group).permit(:name, :description, :school_id, :admin_id, :price)
  end

end
