class Layer < ApplicationRecord
  has_many :cake_layers
  has_many :cakes, through: :cake_layers
end
