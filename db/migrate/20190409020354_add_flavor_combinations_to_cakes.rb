class AddFlavorCombinationsToCakes < ActiveRecord::Migration[5.2]
  def change
    add_column :cakes, :flavor_combinations, :string
  end
end
