class AddGradingScaleToCourse < ActiveRecord::Migration[6.1]
  def change
    add_column :courses, :grading_scale_id, :integer
  end
end
