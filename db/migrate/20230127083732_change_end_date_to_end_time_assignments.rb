class ChangeEndDateToEndTimeAssignments < ActiveRecord::Migration[6.1]
  def change
    rename_column :assignments, :end_date, :end_time
  end
end
