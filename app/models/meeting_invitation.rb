class MeetingInvitation < ApplicationRecord
  belongs_to :user
  belongs_to :meeting
end
