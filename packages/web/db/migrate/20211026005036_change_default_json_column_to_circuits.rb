class ChangeDefaultJsonColumnToCircuits < ActiveRecord::Migration[6.1]
  def change
    change_column_default :circuits, :json, from: '{"cols":[["H"],["Measure"]]}', to: ''
  end
end
