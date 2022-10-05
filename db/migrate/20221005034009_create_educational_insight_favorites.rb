class CreateEducationalInsightFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :educational_insight_favorites do |t|
      t.belongs_to :educational_insight, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
