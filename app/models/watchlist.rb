# == Schema Information
#
# Table name: watchlists
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Watchlist < ApplicationRecord
    belongs_to :user
    
    has_many :stock_orders
    
    has_many :stocks,
        through: :stock_orders,
        source: :stock
end
