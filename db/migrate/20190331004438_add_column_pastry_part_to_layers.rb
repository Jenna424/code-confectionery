class AddColumnPastryPartToLayers < ActiveRecord::Migration[5.2]
  def change
    add_column :layers, :pastry_part, :string
  end
end
