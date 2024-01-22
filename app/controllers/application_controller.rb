class ApplicationController < ActionController::Base
  #filter_parameter_logging :password, :password_confirmation

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  protect_from_forgery with: :exception
  before_action :authorize_admin, only: [:create, :edit, :update]
  before_action :configure_permitted_parameters, if: :devise_controller?



  protected
  def authorize_admin
    if current_user.role == 'student'
      redirect_to root_path
    end
  end

  protected
  def create_notification

  end


  def configure_permitted_parameters
    added_attrs = [:name, :email, :domain, :school_id, :role, :password, :password_confirmation]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
  end


end


