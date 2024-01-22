class Course < ApplicationRecord
  validates :name, length: { minimum: 1 }
  belongs_to :school
  has_many :users
  has_many :assignments
  has_many :lessons, dependent: :destroy
  has_many :enrollments, dependent: :destroy
  has_many :resources, as: :resourceable
  has_one :grading_scale
  self.per_page = 9

  after_create do
    if self.price
      product = Stripe::Product.create(name: name)
      price = Stripe::Price.create(product: product, unit_amount: self.price, currency: "usd")
      update(stripe_product_id: product.id)
    end
  end

end
