class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.integer :container_id
      t.string :text
      t.integer :question_type

      t.timestamps
    end
  end
end
