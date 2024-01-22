class MessagesController < ApplicationController
  skip_before_action :authorize_admin
  def create
    @current_user = current_user
    @message = @current_user.messages.create(content: msg_params[:content], room_id: params[:room_id])
    redirect_back(fallback_location: :back)
  end

  private

  def msg_params
    params.require(:message).permit(:content)
  end
end