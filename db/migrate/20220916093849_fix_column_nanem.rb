class FixColumnNanem < ActiveRecord::Migration[6.1]
  def change
    rename_column :questions, :container_id, :assignment_id
  end
end
