class OptionsController < ApplicationController
  def index
    @course = Course.find(params[:course_id])
    @assignment=Assignment.find(params[:assignment_id])
    @question = Question.find(params[:question_id])
    @option = Option.find(params[:id])
  end

  def show
    @course = Course.find(params[:course_id])
    @assignment = Assignment.find(params[:assignment_id])
    @question = Question.find(params[:question_id])
    @option = Option.find(params[:id])
  end

  def new
    @course = Course.find(params[:course_id])
    @assignment = Assignment.find(params[:assignment_id])
    @question = Question.find(params[:question_id])
    @option = Option.new
  end



  def create
    @option = Option.new(option_params)
    @question = @option.question
    @assignment = @question.assignment
    @course = @assignment.course
    if @option.save
      redirect_to "/course/"+@course.id.to_s+"/assignments/"+@assignment.id.to_s + "/questions/" + @question.id.to_s, alert: "Assignment created successfully."
    else
      redirect_to courses_path, alert: "Error creating Assignment."
    end
  end

  def edit
    @option = Option.find(params[:option_id])
    @question = @option.question
    @assignment = @question.assignment
  end

  def update
    @option = Question.find(params[:id])
    @question = @option.question
    @assignment = @question.assignment
    @course = @assignment.course
    if @option.update(option_params)
      redirect_to "/course/"+@course.id.to_s+"/assignments/"+@assignment.id.to_s+ "/questions/" + @question.id.to_s
    else
      redirect_to edit_question_path
    end
  end


  def option_params
    params.require(:option).permit(:text, :is_correct, :question_id)
  end

end
