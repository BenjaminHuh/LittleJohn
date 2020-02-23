class RemoveColumnsFromStockOrder < ActiveRecord::Migration[5.2]
  def change
    remove_column :stock_orders, :portfolio_id
    remove_column :stock_orders, :watchlist_id
  end
end
