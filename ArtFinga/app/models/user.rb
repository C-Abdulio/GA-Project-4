class User < ApplicationRecord
  has_many :artworks, dependent: :destroy
  has_secure_password
end
