class ImportUserJob
  include Sidekiq::Job
  require "csv"

  def perform(file, domain, school_id)
    selected_columns = [:name, :email, :role]
    CSV.foreach(file, headers: true) do |row|
      user_attributes = {}
      password = row[0]+"parola0!"
      selected_columns.each do |column|
        user_attributes[column] = row[column.to_s.titleize]
        user_attributes[:domain]= domain
        user_attributes[:school_id] = school_id
        user_attributes[:password] = password
      end
      @user = User.new(user_attributes)
      @user.save(:validate => false)
    end
  end


end
