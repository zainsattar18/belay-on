class Climb < ApplicationRecord
  belongs_to :state
  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews

end
