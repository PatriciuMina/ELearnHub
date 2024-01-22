class MeetingsController < ApplicationController

  def index
    @meetings=Meeting.where(
      start_time: Time.now.beginning_of_month.beginning_of_week..Time.now.end_of_month.end_of_week
    )
  end

  def new
    @meeting = Meeting.new
  end

  def show
    @meeting = Meeting.find(params[:id])

  end


  def invite_users
    @meeting = Meeting.find(params[:id])
    @users = User.all
  end

  def send_invitations
    invitations = params[:users_ids]
    @meeting = Meeting.find(params[:id])
    invitations.each do |invitation|
      create_notification(invitation)
      create_invitation(invitation, @meeting.id)
    end
    redirect_to @meeting
  end


  def create_notification(user_id = integer)
    @meeting = Meeting.find(params[:id])
    @url= "/meetings/"+@meeting.id.to_s
    @notification = Notification.new(title: "New Meeting",
                                             content:"You have been invited to participate in a meeting",
                                             on_click_url:@url,
                                             user_id:user_id)
    @notification.save
  end

  def create_invitation(user_id = integer, meeting_id = integer)
    @invitation = MeetingInvitation.new(user_id: user_id, meeting_id: meeting_id)
    @invitation.save
  end

  def create
    @meeting = Meeting.new(meeting_params)
    @meeting.save_zoom_link(@meeting.topic)
    if @meeting.save
      redirect_to meeting_path(@meeting)
    end
  end


  def meeting_params
    params.require(:meeting).permit(:topic, :start_time, :end_time, :user_id)
  end


end
