class User < ApplicationRecord
  has_many :artworks, dependent: :destroy
end
