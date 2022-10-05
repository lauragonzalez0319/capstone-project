class EducationalInsightFavoriteSerializer < ActiveModel::Serializer
  attributes :id
  has_one :educational_insight
  has_one :user
end
