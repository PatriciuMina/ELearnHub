class NotificationJob
  include Sidekiq::Job

  def perform(*args)
    @users = User.where(role: 'admin')
    @users.each do |users|
      @on_click_url = "/sidekiq"
      @notification = Notification.new(title: "New Job ",
                                       content:"A new job has been created ",
                                       on_click_url:@on_click_url,
                                       user_id:users.id)
      @notification.save
    end
  end
end
