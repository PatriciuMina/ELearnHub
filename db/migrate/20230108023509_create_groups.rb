class CreateGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :groups do |t|
      t.integer :school_id
      t.integer :admin_id
      t.string :name
      t.string :description
      t.integer :price
      t.string :stripe_product_id

      t.timestamps
    end
  end
end
