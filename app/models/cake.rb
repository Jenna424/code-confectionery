class Cake < ApplicationRecord
  has_many :cake_ingredients
  has_many :ingredients, through: :cake_ingredients
end
