class AnswearsController < ApplicationController
  skip_before_action :authorize_admin
  require 'uri'
  require 'net/http'
  require 'openssl'
  require 'json'
  require 'ostruct'


  def index
    @assignment = Assignment.find(params[:assignment_id])
    @course = @assignment.course
    @answear=Answear.where(:assignment_id => @assignment.id, :school_id => current_user.school_id)
  end

  def show
    #@course = Course.find(params[:course_id])
    @assignment = Assignment.find(params[:assignment_id])
    @question = Question.where(assignment_id: @assignment.id).all
    @course = @assignment.course
    @answear = Answear.find(params[:id])

  end

  def new
    #@course = Course.find(params[:course_id])
    @assignment = Assignment.find(params[:assignment_id])
    @course = @assignment.course
    @answear = Answear.new
    @time = Time.now
  end

  def ruby_compiler
    @answear = Answear.new
  end

  def parse_compiler
    @array = answear_params[:content].to_s.split("\r\n")
    @code = ""
    @array.each do |a|
      @code = @code + strip_tags(a.to_s) + "; "
    end
    json1 = { 'code' => @code, 'version' => "latest" }.to_json

    url = URI("https://ruby-code-compiler.p.rapidapi.com/")

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    request = Net::HTTP::Post.new(url)
    request["content-type"] = 'application/json'
    request["X-RapidAPI-Key"] = 'f157e59b27mshbe2fb6951de0c56p14ce76jsn03ef35c2bab3'
    request["X-RapidAPI-Host"] = 'ruby-code-compiler.p.rapidapi.com'

    request.body = json1.to_s
    response = http.request(request)
    result = JSON.parse(response.read_body, object_class: OpenStruct)
    word = "error"
    if result.output.to_s.downcase.include?(word.downcase)
      return 1
    else
      return 0
    end
  end


  def create
    @answear = Answear.new(answear_params)
    @assignment = @answear.assignment
    @question = @assignment.questions
    @course = @assignment.course
    if @assignment.category == 'quiz'
      if @answear.save
        redirect_to "/course/"+@course.id.to_s+"/assignments/"+@assignment.id.to_s+"/answears/"+@answear.id.to_s + "/user_answears/new" , alert: "Answear created successfully."
      else
        redirect_to courses_path, alert: "Error creating Answear."
      end
    else
      if @answear.save
        redirect_to courses_path, alert: "Answear created successfully."
      else
        redirect_to courses_path, alert: "Error creating Answear."
      end
    end
  end



  def edit
    @answear = Answear.find(params[:id])
  end

  def update
    @answear = Answear.find(params[:id])
    @assignment = @answear.assignment
    @course = @assignment.course

    @grading_controller = GradingScalesController.new
    @answear.scaled_grade = @grading_controller.convert(grade_params[:grade],@course.grading_scale_id)
    if @answear.update(grade_params)
      redirect_to "/course/"+@course.id.to_s+"/assignments/"+@assignment.id.to_s+"/answears"
    else
      redirect_to edit_answear_path
    end
  end




  def answear_params
    params.require(:answear).permit(:assignment_id, :user_id, :school_id, :course_id, :content, :file)
  end

  def grade_params
    params.require(:answear).permit(:grade, :teacher_id)
  end
end
