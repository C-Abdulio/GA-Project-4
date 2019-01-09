class User < ApplicationRecord
  has_many :artworks, dependent: :destroy
  has_one_attached :artworks
end
