class Layer < ApplicationRecord
  scope :batter, -> { where pastry_part: 'batter' }
  scope :filling, -> { where pastry_part: 'filling' }
  scope :frosting, -> { where pastry_part: 'frosting' }
  
  has_many :cake_layers
  has_many :cakes, through: :cake_layers
end
