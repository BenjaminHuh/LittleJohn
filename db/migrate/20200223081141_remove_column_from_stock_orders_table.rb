class RemoveColumnFromStockOrdersTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :stock_orders, :stock_id
    add_column :stock_orders, :portfolio_stock_id, :integer
    add_column :stock_orders, :watchlist_stock_id, :integer
  end
end
