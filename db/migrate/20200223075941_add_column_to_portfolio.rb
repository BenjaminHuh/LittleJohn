class AddColumnToPortfolio < ActiveRecord::Migration[5.2]
  def change
    add_column :portfolios, :stock_order_id, :integer
  end
end
