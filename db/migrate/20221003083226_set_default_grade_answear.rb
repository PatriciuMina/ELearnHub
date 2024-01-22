class SetDefaultGradeAnswear < ActiveRecord::Migration[6.1]
  def change
    change_column :answears, :grade, :integer, default: 0
  end
end
