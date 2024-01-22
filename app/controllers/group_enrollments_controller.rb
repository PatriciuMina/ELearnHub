class GroupEnrollmentsController < ApplicationController
  skip_before_action :authorize_admin
  def index
    @group_enrollment = GroupEnrollment.all
  end

  def new
    @group_enrollment = GroupEnrollment.new
  end


  def show
    @group_enrollment = GroupEnrollment.all
  end

  def show_enrolled
    @group = Group.find(params[:id])
    @group_enrollment = GroupEnrollment.where(group_id: @group.id).paginate(page: params[:page])
  end

  def create
    @group_enrollment = GroupEnrollment.new(user_id:group_enroll_params[:user_id], group_id: group_enroll_params[:group_id])
    @group = Group.find(params[:group_enrollment][:group_id])
      if @group_enrollment.save
        #create_notification
        redirect_to '/group/'+@group.id.to_s+"/enrolled", alert: "Enrolled successfully."
      else
        redirect_to new_group_enrollment_path, alert: "Error creating user."
      end
  end

    # def create_notification
    #   @user = User.where(id: @enrollment.user_id).first
    #   @teacher = User.where(id: @enrollment.course.teacher_id).first
    #   @on_click_url = "/course/"+@enrollment.course_id.to_s+"/enrolled"
    #   @notification_teacher = Notification.new(title: "New Enrollment",
    #                                            content:"A new student has been enrolled to your course ",
    #                                            on_click_url:@on_click_url,
    #                                            user_id:@teacher.id)
    #   @notification_teacher.save
    #   @url= "/courses/"+@enrollment.course_id.to_s
    #   @notification_student = Notification.new(title: "New Enrollment",
    #                                            content:"You have been enrolled to "+ @enrollment.course.name.to_s+" course",
    #                                            on_click_url:@url,
    #                                            user_id:@user.id)
    #   @notification_student.save
    # end

  def destroy
    @group_enrollment = GroupEnrollment.find(params[:id])
    @group_enrollment.destroy!
    redirect_to "/group/" + @group_enrollment.group_id.to_s + "/enrolled"
  end

  def group_enroll_params
    params.require(:group_enrollment).permit(:user_id, :group_id)
  end

end
