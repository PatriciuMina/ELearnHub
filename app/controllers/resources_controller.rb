class ResourcesController < ApplicationController
  require 'libreconv'
  require 'tempfile'
  def show
    @resource = Resource.where(school_id: current_user.school_id, resourceable_type: 'school').paginate(page: params[:page])
  end

  def new_resource_course
    @course = Course.find(params[:id])
    @resource = Resource.new
  end

  def new_resource_lesson
    @lesson = Lesson.find(params[:id])
    @resource = Resource.new
  end

  def new_resource_parent
    @resource = Resource.new
  end

  def show_resource_course
    @course = Course.find(params[:id])
    @resource = Resource.where(resourceable_type:  'course', resourceable_id:  @course.id).paginate(page: params[:page])
  end

  def show_resource_parent
    @resource = Resource.where(school_id: current_user.school_id, resourceable_type: 'parent').paginate(page: params[:page])
  end

  def show_resource_pdf
    @resource = Resource.find(params[:id])
  end

  def show_resource_docx
    @resource = Resource.find(params[:resource_id])
    temp_file = Tempfile.new(@resource.file.filename.to_s+'.pdf', Rails.root.join('tmp'))
    file_path = temp_file.path
    blob = ActiveStorage::Blob.find_by(filename: @resource.file.filename.to_s)
    local_file_path = blob.service.send(:path_for, blob.key)
    Libreconv.convert(local_file_path.to_s, file_path)
    @file = send_file temp_file.path, type: 'application/pdf', disposition: 'inline', filename: 'example.pdf'
    temp_file.close
  end
  def new
    @resource = Resource.new
    @school = School.find_by(id:current_user.school_id)
    @resource.school_id=@school.id
  end

  def create
    @resource = Resource.new(resource_params)

    if @resource.save(:validate => false)
      if @resource.resourceable_type == 'course'
        redirect_to "/course/"+@resource.resourceable_id.to_s+"/resources"
      elsif @resource.resourceable_type == 'lesson'
        redirect_to "/lessons/"+@resource.resourceable_id.to_s
      elsif @resource.resourceable_type == 'school'
        redirect_to "/resources/show"
      elsif @resource.resourceable_type == 'parent'
        redirect_to root_path
      end

      # Trigger the transcode job if the uploaded file is a video
      if @resource.file.attached? && @resource.file.content_type.start_with?('video/')
        VideoTranscodeJob.perform_async(@resource.file.blob.key)
      end
    else
      render 'new'
    end
  end

  def resource_params
    params.require(:resource).permit(:file, :user_id, :resourceable_id, :resourceable_type, :school_id )
  end
end
