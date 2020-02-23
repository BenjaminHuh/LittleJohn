# == Schema Information
#
# Table name: watchlists
#
#  id             :bigint           not null, primary key
#  user_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  stock_order_id :integer
#

class Watchlist < ApplicationRecord
    belongs_to :user
    
    has_many :stock_orders,
        through: :user,
        source: :stock_orders
    
    has_many :stocks,
        through: :stock_orders,
        source: :stock
end
