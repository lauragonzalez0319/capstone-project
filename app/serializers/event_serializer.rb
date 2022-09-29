class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :all_day, :start, :end
end
