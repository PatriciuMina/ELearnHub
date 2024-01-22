class CreateMeetings < ActiveRecord::Migration[6.1]
  def change
    create_table :meetings do |t|
      t.string :topic
      t.datetime :start_time
      t.string :user_id
      t.integer :duration
      t.string :zoom_link

      t.timestamps
    end
  end
end
