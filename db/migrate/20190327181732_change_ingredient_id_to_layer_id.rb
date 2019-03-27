class ChangeIngredientIdToLayerId < ActiveRecord::Migration[5.2]
  def change
  	rename_column :cake_layers, :ingredient_id, :layer_id
  end
end
