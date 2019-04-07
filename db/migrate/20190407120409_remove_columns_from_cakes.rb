class RemoveColumnsFromCakes < ActiveRecord::Migration[5.2]
  def change
  	remove_columns(:cakes, :image_url, :flavor_combination, :ordered)
  end
end
