class CreateClimbs < ActiveRecord::Migration[6.0]
  def change
    create_table :climbs do |t|
      t.string :climb_name
      t.string :img_url
      t.string :type_of_climb
      t.string :location
      t.references :state, null: false, foreign_key: true

      t.timestamps
    end
  end
end
