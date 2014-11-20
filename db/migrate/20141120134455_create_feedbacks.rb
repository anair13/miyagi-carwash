class CreateFeedbacks < ActiveRecord::Migration
  def change
    create_table :feedbacks do |t|
      t.integer :stars
      t.string :comment

      t.timestamps
    end
  end
end
