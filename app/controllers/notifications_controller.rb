class NotificationsController < ApplicationController
  skip_before_action :authorize_admin

  def index
    @notification = Notification.where(user_id: current_user.id).order(created_at: :desc).paginate(page: params[:page])
  end

  def show
    @notification = Notification.find(params[:id])
  end

  def new
    @notification = Notification.new
  end

  def jobs
    NotificationJob.perform_async
  end

  def create
    @notification = Notification.new(notification_params)
    if @notification.save
      redirect_to new_notification_path
    else
      redirect_back(fallback_location: :back)
    end
  end

  def destroy
    @notification = Notification.find(params[:id])
    @notification.destroy
    redirect_back(fallback_location: :back)
  end

  def notification_params
    params.require(:notification).permit(:title,:content,:user_id,:on_click_url)
  end
end