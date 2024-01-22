class LessonsController < ApplicationController
  def show
    @lesson = Lesson.find(params[:id])
    @course = @lesson.course
    @resource = Resource.where(resourceable_type: 'lesson', resourceable_id: @lesson.id)
  end

  def index
    @lesson =Lesson.all

  end

  def new
    @course = Course.find(params[:course_id])
    @lesson = Lesson.new
  end

  def create
    @lesson = Lesson.new(lesson_params)
    @course = @lesson.course
    if @lesson.save
      create_notification
      redirect_to '/courses/'+@course.id.to_s, alert: "Lesson created successfully."
    else
      redirect_to lessons_path, alert: "Error creating lesson."
    end
  end

  def edit
    @lesson = Lesson.find(params[:id])
  end

  def update
    @lesson = Lesson.find(params[:id])
    if @lesson.update(lesson_params)
      redirect_to lessons_path
    else
      redirect_to edit_lesson_path
    end
  end

  def create_notification
    @enrolled_students = Enrollment.where(course_id: @lesson.course_id)
    @enrolled_students.each do |notification|
      @on_click_url = "/lessons/"+@lesson.id.to_s
      @notification = Notification.new(title: "New Lesson",
                                       content:"A new lesson has been posted for the "+@lesson.course.name.to_s+" course",
                                       on_click_url:@on_click_url,
                                       user_id:notification.user_id)
      @notification.save
    end
  end

  def lesson_params
    params.permit(:name, :text, :course_id, :school_id, :teacher_id, :updated_by)
  end

  def course_params
    params.require(:course).permit(:name, :description, :school_id, :teacher_id, :access_key)
  end

end