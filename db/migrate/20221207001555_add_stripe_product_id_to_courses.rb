class AddStripeProductIdToCourses < ActiveRecord::Migration[6.1]
  def change
    add_column :courses, :stripe_product_id, :string
  end
end
