class Enrollment < ApplicationRecord
  belongs_to :user
  belongs_to :course
  delegate :name, to: :user, prefix: true, allow_nil: true
  self.per_page = 5
end
