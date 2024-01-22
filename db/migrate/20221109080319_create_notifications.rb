class CreateNotifications < ActiveRecord::Migration[6.1]
  def change
    create_table :notifications do |t|
      t.text :title
      t.text :content
      t.string :on_click_url
      t.integer :user_id

      t.timestamps
    end
  end
end
