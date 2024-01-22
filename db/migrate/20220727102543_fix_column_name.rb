class FixColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :enrollments, :student_id, :user_id
  end
end
