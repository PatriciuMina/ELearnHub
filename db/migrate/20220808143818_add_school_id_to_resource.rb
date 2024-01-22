class AddSchoolIdToResource < ActiveRecord::Migration[6.1]
  def change
    add_column :resources, :school_id, :integer
  end
end
