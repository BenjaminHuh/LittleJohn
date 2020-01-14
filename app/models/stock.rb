# == Schema Information
#
# Table name: stocks
#
#  id         :bigint           not null, primary key
#  ticker     :string           not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Stock < ApplicationRecord
    has_many :stock_orders
    
    belongs_to :watchlist

    belongs_to :portfolio
end
