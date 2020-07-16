class User < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :climbs, through: :reviews

  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :username, presence: true, uniqueness:true
  validates :password, length: { in: 4..12 }

end
