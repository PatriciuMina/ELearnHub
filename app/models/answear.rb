class Answear < ApplicationRecord
  belongs_to :assignment
  belongs_to :user
  has_many :user_answears
  delegate :name, to: :user, prefix: true, allow_nil: true
  has_rich_text :content
  has_one_attached :file
end
