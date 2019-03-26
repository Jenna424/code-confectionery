class CreateCakes < ActiveRecord::Migration[5.2]
  def change
    create_table :cakes do |t|
      t.string :structure, default: "layered"
      t.string :occasion
      t.integer :width
      t.float :price
      t.string :img_url
      t.boolean :ordered, default: false

      t.timestamps
    end
  end
end
