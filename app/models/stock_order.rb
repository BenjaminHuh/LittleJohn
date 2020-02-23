# == Schema Information
#
# Table name: stock_orders
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  num_stocks :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  stock_id   :integer
#

class StockOrder < ApplicationRecord
    has_one :portfolio,
        through: :user,
        source: :portfolio

    belongs_to :user

    belongs_to :stock
end
