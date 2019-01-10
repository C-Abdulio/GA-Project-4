class Artwork < ApplicationRecord
  belongs_to :user, optional: true
  has_one_attached :image
end
