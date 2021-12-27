class CreateCircuits < ActiveRecord::Migration[6.0]
  def change
    create_table :circuits do |t|
      t.string :name, null: false
      t.text :dsl, null: false
      t.text :erb, null: false
      t.text :circle_notation, null: false

      t.timestamps
    end
  end
end
