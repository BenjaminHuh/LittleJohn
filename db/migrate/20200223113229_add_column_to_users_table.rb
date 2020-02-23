class AddColumnToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :watchlist, :string, array: true, default: []
  end
end
