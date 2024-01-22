class ChangeColumnTypeForGrade < ActiveRecord::Migration[6.1]
  def change
    change_column :answears, :grade, :float
  end
end
