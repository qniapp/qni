class RemoveDslToCircuit < ActiveRecord::Migration[6.1]
  def change
    remove_column :circuits, :dsl, :text
  end
end
