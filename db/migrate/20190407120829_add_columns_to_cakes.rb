class AddColumnsToCakes < ActiveRecord::Migration[5.2]
  def change
    add_column :cakes, :customer, :string
    add_column :cakes, :name, :string
    add_column :cakes, :message, :string
    add_column :cakes, :garnish, :string
    add_column :cakes, :toppers, :string
  end
end
