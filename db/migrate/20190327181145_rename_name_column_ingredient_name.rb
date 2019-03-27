class RenameNameColumnIngredientName < ActiveRecord::Migration[5.2]
  def change
  	rename_column :layers, :name, :ingredient_name
  end
end
