class RemoveDurationFromMeeting < ActiveRecord::Migration[6.1]
  def change
    remove_column :meetings, :duration
  end
end
