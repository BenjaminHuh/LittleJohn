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

require 'test_helper'

class StockOrderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
