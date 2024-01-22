class Question < ApplicationRecord
  belongs_to :assignment
  has_many :options, dependent: :destroy
  has_many :user_answears
  accepts_nested_attributes_for :options, allow_destroy: true


  self.per_page = 1
end
