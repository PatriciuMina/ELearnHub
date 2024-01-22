class School < ApplicationRecord
  validates :name, length: {minimum: 2}
  validates :domain, length: {minimum: 2}
  has_many :users, dependent: :destroy
  has_many :courses, dependent: :destroy
  accepts_nested_attributes_for :users
  has_many :resources, as: :resourceable

end
