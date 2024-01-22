class CreateGradingScales < ActiveRecord::Migration[6.1]
  def change
    create_table :grading_scales do |t|
      t.string :name

      t.timestamps
    end
  end
end
