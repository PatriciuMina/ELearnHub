class Option < ApplicationRecord
  belongs_to :question
  has_many :user_answears

end
