class CakeSerializer < ActiveModel::Serializer
  attributes :id, :structure, :occasion, :width, :price, :img_url, :ordered, :flavor_combination, :ingredient_ids

  def ingredient_ids
    object.ingredients.map(&:id)
  end
end
