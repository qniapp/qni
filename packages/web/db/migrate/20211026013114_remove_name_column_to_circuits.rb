class RemoveNameColumnToCircuits < ActiveRecord::Migration[6.1]
  def change
    remove_column :circuits, :name, :string
  end
end
