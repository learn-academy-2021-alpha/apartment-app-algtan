class AddImageLinkToApartment < ActiveRecord::Migration[6.1]
  def change
    add_column :apartments, :image_url, :string, :default => "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
  end
end
