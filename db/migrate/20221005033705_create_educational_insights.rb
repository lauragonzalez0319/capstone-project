class CreateEducationalInsights < ActiveRecord::Migration[7.0]
  def change
    create_table :educational_insights do |t|
      t.string :title
      t.string :content
      t.string :source
      t.string :image

      t.timestamps
    end
  end
end
