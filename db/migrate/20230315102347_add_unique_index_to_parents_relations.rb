class AddUniqueIndexToParentsRelations < ActiveRecord::Migration[6.1]
  def change
    add_index :parent_relations, [:parent_id, :child_id], unique: true
  end
end
