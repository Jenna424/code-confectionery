class RenameIngredientsTableLayers < ActiveRecord::Migration[5.2]
  def change
  	rename_table :ingredients, :layers
  end
end
