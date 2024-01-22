class FixColumnNameAssignments < ActiveRecord::Migration[6.1]
  def change
    rename_column :assignments, :type, :category
  end
end
