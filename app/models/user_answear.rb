class UserAnswear < ApplicationRecord
  belongs_to :user
  belongs_to :question
  belongs_to :option
  belongs_to :answear
  has_rich_text :body

end
