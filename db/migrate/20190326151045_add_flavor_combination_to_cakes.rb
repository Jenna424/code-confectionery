class AddFlavorCombinationToCakes < ActiveRecord::Migration[5.2]
  def change
    add_column :cakes, :flavor_combination, :string
  end
end
