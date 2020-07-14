class State < ApplicationRecord
  has_many :climbs, dependent: :destroy
end
