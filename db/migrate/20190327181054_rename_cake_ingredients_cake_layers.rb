class RenameCakeIngredientsCakeLayers < ActiveRecord::Migration[5.2]
  def change
  	rename_table :cake_ingredients, :cake_layers
  end
end
