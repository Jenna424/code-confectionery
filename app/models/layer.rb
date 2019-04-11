class Layer < ApplicationRecord
  scope :batter, -> { where pastry_part: 'batter' }
  scope :filling, -> { where pastry_part: 'filling' }
  scope :frosting, -> { where pastry_part: 'frosting' }

  validates :flavor, presence: true, uniqueness: true
  validates :pastry_part, inclusion: { in: %w(batter filling) }
  
  has_many :cake_layers
  has_many :cakes, through: :cake_layers
end
