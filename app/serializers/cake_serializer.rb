class CakeSerializer < ActiveModel::Serializer
  attributes :id, :structure, :occasion, :flavor_combination, :diameter, :price, :customer, :name, :message, :garnish, :toppers, :layer_ids

  def layer_ids
    object.layers.map(&:id)
  end
end
