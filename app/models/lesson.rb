class Lesson < ApplicationRecord
  validates :name, length: {minimum: 1}
  belongs_to :course
  has_many :resources, as: :resourceable
end
