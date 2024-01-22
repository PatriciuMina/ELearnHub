class QuestionsController < ApplicationController
  def index
    @course = Course.find(params[:course_id])
    @assignment=Assignment.find(params[:assignment_id])
    @question = Question.find(params[:id])
  end

  def show
    @course = Course.find(params[:course_id])
    @assignment = Assignment.find(params[:assignment_id])
    @question = Question.find(params[:id])
    @options = @question.options
  end

  def new
    @course = Course.find(params[:course_id])
    @assignment = Assignment.find(params[:assignment_id])
    @question = Question.new
  end



  def create
    @question = Question.new(question_params)
    @assignment = @question.assignment
    @course = @assignment.course
    if @question.save
      redirect_to "/course/"+@course.id.to_s+"/assignments/"+@assignment.id.to_s+"/questions/"+@question.id.to_s, alert: "Assignment created successfully."
    else
      redirect_to courses_path, alert: "Error creating Assignment."
    end
  end

  def edit
    @question = Question.find(params[:question_id])
    @assignment = @question.assignment
  end

  def update
    @question = Question.find(params[:id])
    @assignment = @question.assignment
    @course = @assignment.course
    if @question.update(question_params)
      redirect_to "/course/"+@course.id.to_s+"/assignments/"+@assignment.id.to_s+"/questions/"+@question.id.to_s
    else
      redirect_to edit_question_path
    end
  end


  def question_params
    params.require(:question).permit(:assignment_id, :question_type, :text, :points)
  end

end
