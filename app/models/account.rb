# == Schema Information
#
# Table name: accounts
#
#  id         :bigint           not null, primary key
#  balance    :float            not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Account < ApplicationRecord
    belongs_to :users
end
