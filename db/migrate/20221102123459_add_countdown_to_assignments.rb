class AddCountdownToAssignments < ActiveRecord::Migration[6.1]
  def change
    add_column :assignments, :countdown, :datetime
  end
end
