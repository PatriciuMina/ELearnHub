require 'csv'
class ExportUserConditionalJob
  include Sidekiq::Job


  def perform(selected_columns)
    @users = User.select(selected_columns)

    CSV.open("Users_conditional.csv", "wb") do |csv|
      csv << selected_columns
      @users.each do |user|
        csv << selected_columns.map { |column| user.send(column)}
      end
    end
    #file_path = Rails.root.join('public', 'Users_conditional.csv')
    #File.open(file_path, 'w') do |file|
    #  file.write(csv)
    #end
    #File.close
    # Do something later
  end
end
