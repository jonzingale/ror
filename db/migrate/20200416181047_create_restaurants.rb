class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :phone
      t.text :availability
      t.string :open_time
      t.string :close_time
      t.integer :location_id
      t.string :email

      t.timestamps
    end
    add_index :restaurants, :location_id
  end
end
