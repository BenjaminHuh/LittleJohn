class ChangeWatchlistColumnInUsersTable < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :watchlist, :string, array: true, default: ["0"]
  end
end
