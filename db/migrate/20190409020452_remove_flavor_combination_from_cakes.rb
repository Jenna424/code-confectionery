class RemoveFlavorCombinationFromCakes < ActiveRecord::Migration[5.2]
  def change
    remove_column :cakes, :flavor_combination
  end
end
