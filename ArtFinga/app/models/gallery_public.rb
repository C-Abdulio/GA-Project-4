class GalleryPublic < ApplicationRecord
  has_many :users, :artworks
end
