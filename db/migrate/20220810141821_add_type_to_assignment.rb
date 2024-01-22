class AddTypeToAssignment < ActiveRecord::Migration[6.1]
  def change
    add_column :assignments, :type, :string
  end
end
