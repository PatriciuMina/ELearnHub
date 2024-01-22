class AssignmentsController < ApplicationController

  def index
    @course = Course.find(params[:course_id])
    @assignments =Assignment.where(:course_id => @course.id, :school_id => current_user.school_id).paginate(page: params[:page])

  end

  def calendar
    @course = Course.find(params[:course_id])
    @assignments=Assignment.where(:course_id => @course.id, :school_id => current_user.school_id,
      start_time: Time.now.beginning_of_month.beginning_of_week..Time.now.end_of_month.end_of_week
    )
  end

  def show
    @course = Course.find(params[:course_id])
    @assignment = Assignment.find(params[:id])
    @question = Question.where(:assignment_id => @assignment.id).paginate(page: params[:page])
    #check if answear exists for single submission
    @answear = Answear.find_by(user_id: current_user.id, assignment_id: @assignment.id)

  end

  def new
    @course = Course.find(params[:course_id])
    @assignment = Assignment.new
  end



  def create
    @assignment = Assignment.new(assignment_params)
    @course = @assignment.course
    if @assignment.save
      create_notification
      redirect_to "/course/"+@course.id.to_s+"/assignments/"+@assignment.id.to_s, alert: "Assignment created successfully."
    else
      redirect_to courses_path, alert: "Error creating Assignment."
    end
  end

  def edit

  end

  def update
    @assignment = Assignment.find(params[:id])
    if @assignment.update(assignment_params)
      redirect_to courses_path
    else
      redirect_to edit_assignment_path
    end
  end

  def create_notification
    @enrolled_students = Enrollment.where(course_id: @assignment.course_id)
    @enrolled_students.each do |notification|
      @on_click_url = "/course/"+@assignment.course_id.to_s+"/assignments/"+@assignment.id.to_s
      @notification = Notification.new(title: "New Assignment",
                                       content:"A new assignemnt has been attached for the "+@assignment.course.name.to_s+" course",
                                       on_click_url:@on_click_url,
                                       user_id:notification.user_id)
      @notification.save
    end
  end

  def assignment_params
    params.require(:assignment).permit(:title, :user_id, :school_id, :course_id, :category, :body, :start_time, :end_time, :countdown)
  end

end
