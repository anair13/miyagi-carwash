class CreateWashes < ActiveRecord::Migration
  def change
    create_table :washes do |t|
      t.string :email
      t.string :address
      t.string :plate

      t.timestamps
    end
  end
end
