class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password, :first_name, :last_name, :identify_as, :age, :weight, :height, :birth_control_method, :menstruating, :average_cycle_length, :period_notification_on, :self_breast_exam_notification_on, :mammogram_notification_on, :routine_checkup_notification_on
end
