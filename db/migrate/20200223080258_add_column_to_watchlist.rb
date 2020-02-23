class AddColumnToWatchlist < ActiveRecord::Migration[5.2]
  def change
        add_column :watchlists, :stock_order_id, :integer
  end
end
