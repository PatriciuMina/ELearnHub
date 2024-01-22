class RoomsController < ApplicationController
  skip_before_action :authorize_admin
  def index
    @current_user = current_user
    @users = User.all
    @rooms = Room.public_rooms
    @room = Room.new
  end

  def create
    @room = Room.create(name: params["room"]["name"])
  end

  def show
    @current_user = current_user
    @single_room = Room.find(params[:id])
    @rooms = Room.public_rooms
    @users = User.all
    @room = Room.new
    @message = Message.new
    @messages = @single_room.messages
    render "index"
  end
end
