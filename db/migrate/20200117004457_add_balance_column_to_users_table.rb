class AddBalanceColumnToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :balance, :float, null: false
  end
end
