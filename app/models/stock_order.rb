# == Schema Information
#
# Table name: stock_orders
#
#  id           :bigint           not null, primary key
#  stock_id     :integer          not null
#  portfolio_id :integer
#  watchlist_id :integer
#  user_id      :integer          not null
#  num_stocks   :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class StockOrder < ApplicationRecord
    has_many :stocks
    has_many :portfolios
    has_many :watchlists
    has_many :users
end
