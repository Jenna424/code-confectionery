class RenameIngredientNameColumnFlavorInLayers < ActiveRecord::Migration[5.2]
  def change
  	rename_column :layers, :ingredient_name, :flavor
  end
end
