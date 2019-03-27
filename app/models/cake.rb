class Cake < ApplicationRecord
  has_many :cake_layers
  has_many :layers, through: :cake_layers
end
