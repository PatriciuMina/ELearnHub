class AddStartEndDateToAssignments < ActiveRecord::Migration[6.1]
  def change
    add_column :assignments, :start_date, :datetime
    add_column :assignments, :end_date, :datetime
  end
end
