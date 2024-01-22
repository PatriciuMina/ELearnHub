class CreateResources < ActiveRecord::Migration[6.1]
  def change
    create_table :resources do |t|
      t.integer :resourceable_id
      t.string :resourceable_type
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end
