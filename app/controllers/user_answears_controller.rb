class UserAnswearsController < ApplicationController
  skip_before_action :authorize_admin
  def index
    @course = Course.find(params[:course_id])
    @assignment=Assignment.find(params[:assignment_id])
    @question = Question.find(params[:question_id])
    @option = Option.find(params[:id])
  end

  def show
    @course = Course.find(params[:course_id])
    @assignment = Assignment.find(params[:assignment_id])
    @question = Question.where(:assignment_id => @assignment.id).paginate(page: params[:page])
    @option = Option.find(params[:id])
  end

  def new
    @course = Course.find(params[:course_id])
    @assignment = Assignment.find(params[:assignment_id])
    @answear = Answear.find(params[:answear_id])
    @question = Question.where(:assignment_id => @assignment.id).paginate(page: params[:page])
    #@question = Question.where(assignment_id: @assignment.id).all
    @index = params[:page].to_i || 0
    #@option = Option.new
    @user_answear = UserAnswear.new
  end



  def create
    #delete old answer if user submits again
    UserAnswear.find_by(user_id: useranswear_params[:user_id], question_id: useranswear_params[:question_id]).try(:destroy)
    #@user_answear = UserAnswear.new(useranswear_params)
    @answear =  Answear.find(useranswear_params[:answear_id])
    @assignment = @answear.assignment
    @question = Question.where(assignment_id: @assignment.id).paginate(page: params[:page])
    @option = Option.where(question_id: @question.ids).all
    @course = @assignment.course
    @total_points = Question.where(assignment_id: @assignment.id).sum(:points)
    @index = (useranswear_params[:page].to_i || 0) + 1
    @question_multiple= Question.find(useranswear_params[:question_id])
    @option_multiple = Option.where(question_id: @question_multiple.id)
    if @question_multiple.question_type == "multiple_choice"
      for i in 0..@option_multiple.size-1 do
        UserAnswear.find_by(user_id: useranswear_params[:user_id],question_id: useranswear_params[:question_id]).try(:destroy)
      end
    end
    if @question_multiple.question_type == "multiple_choice"
      @aux = 0
      @all_correct = true
      for i in 0..@option_multiple.size-1 do
        if params[:user_answears_array][i+@aux] == "false" && params[:user_answears_array][i+1+@aux] == "true"
          @user_answear = UserAnswear.new(user_id: useranswear_params[:user_id], question_id: useranswear_params[:question_id], option_id: @option_multiple[i].id, answear_id: useranswear_params[:answear_id], body: useranswear_params[:body])
          if @user_answear.option.is_correct == false
            @all_correct = false
          end
          unless @user_answear.save(:validate => false)
            redirect_back(fallback_location: :back)
          end
          @aux+=1
        end
      end
    else
      if @question_multiple.question_type == "single_choice"
        @user_answear = UserAnswear.new(user_id: useranswear_params[:user_id], question_id: useranswear_params[:question_id], option_id: useranswear_params[:option_id], answear_id: useranswear_params[:answear_id], body: useranswear_params[:body])
      else
        @user_answear = UserAnswear.new(useranswear_params)
      end
    end

    @question_answered = @user_answear.question

    if @question_answered.question_type == "multiple_choice"
      if @all_correct
        @answear.grade+= @question_answered.points.to_f*100/@total_points.to_f/10
        @answear.teacher_id = current_user.id
      end
    else
      if @question_answered.question_type == "single_choice"
        if @user_answear.option.is_correct == true
          @answear.grade+= @question_answered.points.to_f*100/@total_points.to_f/10
          @answear.teacher_id = current_user.id
        end
      end
    end
    @grading_controller = GradingScalesController.new
    @answear.scaled_grade = @grading_controller.convert(@answear.grade,@course.grading_scale_id)
    @answear.save
    if @user_answear.save
      redirect_to "/course/"+@course.id.to_s+"/assignments/"+@assignment.id.to_s+"/answears/"+@answear.id.to_s + "/user_answears/new"+"?page="+@index.to_s, alert: "User_Answear created successfully."
    else
      redirect_to "/course/"+@course.id.to_s+"/assignments/"+@assignment.id.to_s+"/answears/"+@answear.id.to_s + "/user_answears/new", alert: "Error creating Answear."
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
    if @option.update(useranswear_params)
      redirect_to "/course/"+@course.id.to_s+"/assignments/"+@assignment.id.to_s+ "/questions/" + @question.id.to_s
    else
      redirect_to edit_question_path
    end
  end


  def useranswear_params
    params.require(:user_answear).permit(:user_id, :question_id, :option_id, :answear_id, :page, :body)
  end
end
