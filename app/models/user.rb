class User < ApplicationRecord
  has_many :events
  has_secure_password
  validates :email, uniqueness: true
  # validates :password, length: { minimum: 4 }
end
