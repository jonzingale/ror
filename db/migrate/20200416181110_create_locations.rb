class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :location
      t.integer :district

      t.timestamps
    end
    add_index :locations, :location
  end
end
