class AddGradedByToAnswears < ActiveRecord::Migration[6.1]
  def change
    add_column :answears, :teacher_id, :integer
  end
end
