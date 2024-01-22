class CreateParentRelations < ActiveRecord::Migration[6.1]
  def change
    create_table :parent_relations do |t|
      t.integer :parent_id
      t.integer :child_id
      t.timestamps
    end
  end
end
