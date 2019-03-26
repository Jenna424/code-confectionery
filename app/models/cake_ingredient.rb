class CakeIngredient < ApplicationRecord
  belongs_to :cake
  belongs_to :ingredient
end
