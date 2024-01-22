class Assignment < ApplicationRecord
  belongs_to :course
  has_many :answears
  has_many :questions, dependent: :destroy
  accepts_nested_attributes_for :questions, allow_destroy: true
  has_rich_text :body
  self.per_page = 5
end
