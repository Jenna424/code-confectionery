class CreateCakeIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :cake_ingredients do |t|
      t.integer :cake_id
      t.integer :ingredient_id

      t.timestamps
    end
  end
end
