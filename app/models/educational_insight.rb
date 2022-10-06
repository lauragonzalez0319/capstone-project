class EducationalInsight < ApplicationRecord
  has_many :users, through: :educational_insight_favorites
end
