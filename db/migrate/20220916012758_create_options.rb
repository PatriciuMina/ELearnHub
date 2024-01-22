class CreateOptions < ActiveRecord::Migration[6.1]
  def change
    create_table :options do |t|
      t.string :text
      t.boolean :is_correct
      t.integer :question_id

      t.timestamps
    end
  end
end
