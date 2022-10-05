class EducationalInsightFavorite < ApplicationRecord
  belongs_to :educational_insight
  belongs_to :user
end
