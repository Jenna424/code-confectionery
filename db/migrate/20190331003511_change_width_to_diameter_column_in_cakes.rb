class ChangeWidthToDiameterColumnInCakes < ActiveRecord::Migration[5.2]
  def change
  	rename_column :cakes, :width, :diameter
  end
end
