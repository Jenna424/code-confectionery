class RemoveImgUrlFromCakes < ActiveRecord::Migration[5.2]
  def change
    remove_column :cakes, :img_url
  end
end
