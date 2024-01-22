class AddGradeToAnswears < ActiveRecord::Migration[6.1]
  def change
    add_column :answears, :grade, :integer
  end
end
