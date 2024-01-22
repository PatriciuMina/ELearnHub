class ChangeStartDateToStartTimeAssignments < ActiveRecord::Migration[6.1]
  def change
    rename_column :assignments, :start_date, :start_time
  end
end
