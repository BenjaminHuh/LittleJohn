# == Schema Information
#
# Table name: summaries
#
#  id      :bigint           not null, primary key
#  user_id :integer
#  balance :integer
#  date    :string
#  stocks  :json
#  close   :integer
#

class Summary < ApplicationRecord
    belongs_to :user
end
