class CoursesController < ApplicationController
  before_action :authenticate_user!
  #before_action :check_enrolled,  only: :show

  def index
    @courses = Course.where(school_id: current_user.school_id, price: nil).paginate(page: params[:page])
    @enrolls = Enrollment.where.not(user_id: current_user.id)
  end

  def show
    @course = Course.find(params[:id])
    @lesson = Lesson.all
  end

  def new
    @grading_scales = GradingScale.all
    @course = Course.new
  end

  def report_courses
    selected_columns = params[:selected_columns] || []
    filter_first = params[:filter_first] || []
    filter_second = params[:filter_second] || []
    filter_third = params[:filter_third] || []
    respond_to do |format|
      format.html { render :template => 'courses/report_courses' }
      format.csv { send_data ReportCourseJob.perform_async(selected_columns, filter_first.as_json, filter_second.as_json, filter_third.as_json), filename: "Report_course.csv" }
    end
  end

  def shop
    @courses = Course.where.not(price: nil).paginate(page: params[:page])
    @groups = Group.where.not(price: nil).paginate(page: params[:page])

  end

  def my_courses
    @courses = Course.where(school_id: current_user.school_id)
    @enrolls = Enrollment.where(user_id: current_user.id)
    @cursuri = Array.new
    @courses.each do |c|
      @enrolls.each do |e|
        if c.id == e.course_id
          @cursuri.push(c)
        end
      end
    end
  end

  def child_courses
    @parent_relation = ParentRelation.where(parent_id: current_user.id).first
    @parent = @parent_relation.parent
    @child = @parent_relation.child
    @courses = Course.where(school_id: current_user.school_id)
    @enrolls = Enrollment.where(user_id: @child.id)
    @child_courses = Array.new
    @courses.each do |c|
      @enrolls.each do |e|
        if c.id == e.course_id
          @child_courses.push(c)
        end
      end
    end
  end

  def enroll_users
    if current_user.role != 'student'
      @course = Course.find(params[:id])
      @enrolls = Enrollment.where(course_id: @course.id)
      @users = User.where(role: 'student')
      @enrolls.each do |enroll|
        @users = @users.where.not(id: enroll.user_id)
      end
    end
  end

  def save_enroll_users
    ids = params[:users_ids]
    @course = Course.find(params[:id])
    ids.each do |stud|
      @enroll = Enrollment.new(user_id: stud, course_id: @course.id)
      @enroll.save(:validate => false)
    end
    redirect_to "/course/"+@course.id.to_s+"/enrolled?page=1"
  end

  def create
    @course = Course.new(course_params)
    if @course.save
      create_notification
      redirect_to @course, alert: "Course created successfully."
    else
      redirect_to courses_path, alert: "Error creating Course."
    end
  end

  def edit
    @course = Course.find(params[:id])
  end

  def update
    @course = Course.find(params[:id])
    if @course.update(course_params)
      redirect_to courses_path
    else
      redirect_to edit_course_path
    end
  end

  def check_enrolled
    @course = Course.find(params[:id])
    @enrollment = Enrollment.where(user_id: current_user.id, course_id: @course.id).first
    unless @enrollment.present?
      redirect_to root_path
    end
  end

  def create_notification
    @users = User.all
    @users.each do |notification|
      @on_click_url = "/courses/"
      @notification = Notification.new(title: "New Course",
                                       content: "A new course called " + @course.name.to_s + " has been added",
                                       on_click_url: @on_click_url,
                                       user_id: notification.id)
      @notification.save
    end
  end

  def enrollment_params
    params.require(:users_ids).permit(:users_ids)
  end

  def course_params
    params.require(:course).permit(:name, :description, :school_id, :teacher_id, :grading_scale_id, :access_key, :price)
  end

end