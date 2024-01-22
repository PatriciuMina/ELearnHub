class ReportCourseJob
  include Sidekiq::Job
  require "csv"

  def perform(selected_columns, filter_first, filter_second, filter_third)

    query = Course
    selected_columns.each do |column|
      filter_1 = filter_first[column]
      filter_2 = filter_second[column]
      filter_3 = filter_third[column]
      column_type = Course.column_for_attribute(column).type

      if column_type == :string
        if filter_1.present?
          query = query.where("#{column} like ?", "#{filter_1}%")
        end
        if filter_2.present?
          query = query.where("#{column} like ?", "%#{filter_2}%")
        end
        if filter_3.present?
          query = query.where("#{column} like ?", "%#{filter_3}")
        end
      end

      if column_type == :integer
        if filter_1.present?
          query = query.where("#{column} < ?", filter_1.to_i)
        end
        if filter_2.present?
          query = query.where("#{column} = ?", filter_2.to_i)
        end
        if filter_3.present?
          query = query.where("#{column} > ?", filter_3.to_i)
        end
      end

      if column_type == :datetime
        if filter_1.present? && filter_3.present?
          query = query.where(column => filter_1..filter_3)
        elsif filter_1.present?
          query = query.where("#{column} >= ?", filter_1)
        elsif filter_3.present?
          query = query.where("#{column} <= ?", filter_3)
        elsif filter_2.present?
          query = query.where("#{column} = ?", filter_2)
        end
      end

    end

    @courses = query.all

    CSV.open("Report_course.csv", "wb") do |csv|
      csv << selected_columns
      @courses.each do |course|
        csv << selected_columns.map { |column| course.send(column)}
      end
    end
    #file_path = Rails.root.join('public', 'Report_user.csv')
    #File.open(file_path, 'w') do |file|
    #  file.write(csv)
    #end
    #File.close
    # Do something later
  end
end
