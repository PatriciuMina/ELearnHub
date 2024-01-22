class GradingScalesController < ApplicationController
  skip_before_action :authorize_admin

  def show
    @grading_scale = GradingScale.find(params[:id])
  end

  def index
    @grading_scales = GradingScale.all
  end

  def new
    @grading_scale = GradingScale.new
  end

  def create
    @grading_scale = GradingScale.new(scale_params)
    if @grading_scale.save
      redirect_to root_path
    else
      puts @grading_scale.errors.full_messages
      redirect_to new_course_path
    end
  end

  def convert(grade, scale_id)
    @grade_float = grade.to_f
    @scale = GradingScale.where(id: scale_id).first

    case @scale.name
    when "letter"
      if @grade_float >= 9.7
        @output = "A+"
      elsif @grade_float >= 9.3
        @output = "A"
      elsif @grade_float >= 9.0
        @output = "A-"
      elsif @grade_float >= 8.7
        @output = "B+"
      elsif @grade_float >= 8.3
        @output = "B"
      elsif @grade_float >= 8.0
        @output = "B-"
      elsif @grade_float >= 7.7
        @output = "C+"
      elsif @grade_float >= 7.3
        @output = "C"
      elsif @grade_float >= 7.0
        @output = "C-"
      elsif @grade_float >= 6.7
        @output = "D+"
      elsif @grade_float >= 6.5
        @output = "D"
      elsif @grade_float >= 6.0
        @output = "D-"
      else
        @output = "F"
      end

    when "pass/fail"
      if @grade_float >= 5.0
        @output = "Pass"
      else
        @output = "Fail"
      end

    when "percentage"
      @output = (@grade_float * 10).to_s + "%"
    when "numeric"
      @output = @grade_float
    else
      @custom_scale = Hash[@scale.custom.split(',').map { |s| s.strip.split(':') }]
      @output = ""
      @custom_scale.each do |label, score|
        if @grade_float >= score.to_f
          @output = label
          break
        end
      end
    end

    return @output
  end

  def scale_params
    params.require(:grading_scale).permit(:name, :custom)
  end

end
