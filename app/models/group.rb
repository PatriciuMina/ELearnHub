class Group < ApplicationRecord
  has_many :users
  self.per_page = 9


  after_create do
    if self.price
      product = Stripe::Product.create(name: name)
      price = Stripe::Price.create(product: product, unit_amount: self.price, currency: "usd")
      update(stripe_product_id: product.id)
    end
  end
end
