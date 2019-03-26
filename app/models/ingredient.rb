class Ingredient < ApplicationRecord
  has_many :cake_ingredients
  has_many :cakes, through: :cake_ingredients
end
