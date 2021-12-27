class RemoveErbColumnToCircuit < ActiveRecord::Migration[6.0]
  def change
    remove_column :circuits, :erb, :text
  end
end
