class AddUpdatedByToLessons < ActiveRecord::Migration[6.1]
  def change
    add_column :lessons, :updated_by, :integer
  end
end
