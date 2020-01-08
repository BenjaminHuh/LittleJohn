class CreateStockOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :stock_orders do |t|
      t.integer :stock_id, null: false
      t.integer :portfolio_id
      t.integer :watchlist_id
      t.integer :user_id, null: false
      t.integer :num_stocks
      t.timestamps
    end
  end
end
