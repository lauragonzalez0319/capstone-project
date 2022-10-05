class User < ApplicationRecord
  has_many :events
  has_secure_password
  validates :email, uniqueness: true
  has_many :educational_insight_favorites
  # validates :password, length: { minimum: 4 }
end
