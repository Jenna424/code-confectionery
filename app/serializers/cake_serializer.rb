class CakeSerializer < ActiveModel::Serializer
  attributes :id, :structure, :occasion, :diameter, :price, :customer, :name, :message, :garnish, :toppers, :ingredient_ids

  def ingredient_ids
    object.ingredients.map(&:id)
  end
end
