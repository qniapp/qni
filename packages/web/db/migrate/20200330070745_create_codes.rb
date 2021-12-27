class CreateCodes < ActiveRecord::Migration[6.0]
  def change
    create_table :codes do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
