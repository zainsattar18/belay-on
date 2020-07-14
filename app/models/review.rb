class Review < ApplicationRecord
  belongs_to :climb
  belongs_to :user
  has_many :photos, dependent: :destroy
end
