class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :img_url
      # add_reference :user, :foreign_key: true

      t.timestamps
    end
  end
end
