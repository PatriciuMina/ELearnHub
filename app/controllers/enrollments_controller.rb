class EnrollmentsController < ApplicationController
  skip_before_action :authorize_admin
  def index
    @enrollment = Enrollment.all
  end

  def new
    @course = Course.find(params[:id])
    @enrollment = Enrollment.new
  end


  def show
    @enrollment = Enrollment.all
  end

  def show_enrolled
    @course = Course.find(params[:id])
    @enrollment = Enrollment.where(course_id: @course.id).paginate(page: params[:page])
  end

  def create
    @enrollment = Enrollment.new(user_id:enroll_params[:user_id], course_id: enroll_params[:course_id])
    @course = Course.find(params[:enrollment][:course_id])
    if @course.access_key.blank?
      if @enrollment.save
        create_notification
        redirect_to root_path, alert: "Enrolled successfully."
      else
        redirect_to new_enrollment_path, alert: "Error creating user."
      end
    else
      access_key=String.new(enroll_params[:access_key])
      if @course.access_key == access_key
        if @enrollment.save
          create_notification
          redirect_to root_path
        end
      else
        redirect_to "/courses/"+@course.id.to_s
      end
    end
  end

  def create_notification
    @user = User.where(id: @enrollment.user_id).first
    @teacher = User.where(id: @enrollment.course.teacher_id).first
    @on_click_url = "/course/"+@enrollment.course_id.to_s+"/enrolled"
    @notification_teacher = Notification.new(title: "New Enrollment",
                                     content:"A new student has been enrolled to your course ",
                                     on_click_url:@on_click_url,
                                     user_id:@teacher.id)
    @notification_teacher.save
    @url= "/courses/"+@enrollment.course_id.to_s
    @notification_student = Notification.new(title: "New Enrollment",
                                             content:"You have been enrolled to "+ @enrollment.course.name.to_s+" course",
                                             on_click_url:@url,
                                             user_id:@user.id)
    @notification_student.save
  end

  def destroy
    @enrollment = Enrollment.find(params[:id])
    @enrollment.destroy!
    redirect_to "/course/" + @enrollment.course_id.to_s + "/enrolled"
  end

  def enroll_params
    params.require(:enrollment).permit(:user_id, :course_id, :access_key)
  end

end
