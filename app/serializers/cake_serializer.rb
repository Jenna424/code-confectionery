class CakeSerializer < ActiveModel::Serializer
  attributes :id, :structure, :occasion, :diameter, :price, :customer, :name, :message, :garnish, :toppers
  has_many :layers
end
