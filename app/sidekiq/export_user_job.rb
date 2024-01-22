class ExportUserJob
  include Sidekiq::Job
  require "csv"

  def perform(*args)
    @email_user = args[1]
    headers = ['Name', 'Email', 'Domain', 'Role']

    CSV.open("Users.csv", "wb") do |csv|
      csv << headers
      @users = User.where(domain: args[0])
      @users.each do |user|
        csv << [user.name, user.email, user.domain, user.role]
      end
    end
    # file_path = Rails.root.join('public', 'users.csv')
    # File.open(file_path, 'w') do |file|
    #  file.write(csv_data)
    # end
    # File.close
    #not working yet
    #UserMailer.export_users(@email_user, csv_data).deliver_now
  end


end
