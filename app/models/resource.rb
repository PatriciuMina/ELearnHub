class Resource < ApplicationRecord
  has_one_attached :file
  belongs_to :resourceable, polymorphic: true
  self.per_page = 2
end
