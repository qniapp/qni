class RemoveCircleNotationColumnToCircuit < ActiveRecord::Migration[6.0]
  def change
    remove_column :circuits, :circle_notation, :text
  end
end
