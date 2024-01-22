class CreateBills < ActiveRecord::Migration[6.1]
  def change
    create_table :bills do |t|
      t.string :name
      t.string :email
      t.string :product_id
      t.integer :amount

      t.timestamps
    end
  end
end
