class AddImageLinkToApartment < ActiveRecord::Migration[6.1]
  def change
    add_column :apartments, :image_url, :string
  end
end
