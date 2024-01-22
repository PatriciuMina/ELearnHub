class SchoolsController < ApplicationController
  skip_before_action :authorize_admin
  skip_before_action :verify_authenticity_token
  def show
    @school = School.find(params[:id])
  end

  def index
  end

  def new
    @school = School.new
    @user = User.new
  end

  def create
    School.transaction do
      @school = School.new(school_params)
      @school.save!
      @user = User.new(user_params)
      @user.domain = @school.domain
      @user.school_id = @school.id
      if @user.save!
       redirect_to "http://#{@school.domain}.lms.com:3000/"
      else
        render 'new'
      end
    end
  rescue StatementInvalid => e
    errors.add(e.message)
  end

  def school_params
    params.require(:school).permit(:name, :domain)
  end

  def user_params
    params.require(:user).permit( :name, :email, :password, :password_confirmation, :domain, :role, :id_school)
  end

end






