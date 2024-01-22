class CreateAnswears < ActiveRecord::Migration[6.1]
  def change
    create_table :answears do |t|
      t.integer :assignment_id
      t.integer :user_id
      t.integer :school_id
      t.integer :course_id

      t.timestamps
    end
  end
end
