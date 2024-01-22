class AddScaledGradeToAnswear < ActiveRecord::Migration[6.1]
  def change
    add_column :answears, :scaled_grade, :string
  end
end
