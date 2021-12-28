class ChangeNullJsonColumnToCircuits < ActiveRecord::Migration[6.1]
  def change
    change_column_null :circuits, :json, false
  end
end
