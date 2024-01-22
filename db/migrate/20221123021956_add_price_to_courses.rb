class AddPriceToCourses < ActiveRecord::Migration[6.1]
  def change
    add_column :courses, :price, :integer
  end
end
