class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.boolean :all_day
      t.string :start
      t.string :end

      t.timestamps
    end
  end
end
