class AddCustomScaleStringToGradingScale < ActiveRecord::Migration[6.1]
  def change
    add_column :grading_scales, :custom, :string
  end
end
