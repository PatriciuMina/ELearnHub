class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.integer :school_id
      t.integer :teacher_id
      t.string :name
      t.string :description
      t.string :access_key

      t.timestamps
    end
  end
end
