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
    validates :balance, presence: true
    validates :user_id, uniqueness: true

    belongs_to :user
end
