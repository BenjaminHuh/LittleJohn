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

require 'test_helper'

class WatchlistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
