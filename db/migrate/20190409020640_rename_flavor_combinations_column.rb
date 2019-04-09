class RenameFlavorCombinationsColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :cakes, :flavor_combinations, :flavor_combination
  end
end
