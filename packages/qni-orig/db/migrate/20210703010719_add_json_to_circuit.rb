class AddJsonToCircuit < ActiveRecord::Migration[6.1]
  def change
    add_column :circuits, :json, :text, default: '{"cols":[["H"],["Measure"]]}'
  end
end
