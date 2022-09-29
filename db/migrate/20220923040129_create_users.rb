class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :identify_as
      t.integer :age
      t.integer :weight
      t.string :height
      t.string :birth_control_method
      t.boolean :menstruating
      t.string :average_cycle_length
      t.boolean :period_notification_on
      t.boolean :self_breast_exam_notification_on
      t.boolean :mammogram_notification_on
      t.boolean :routine_checkup_notification_on

      t.timestamps
    end
  end
end
