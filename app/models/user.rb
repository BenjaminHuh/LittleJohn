# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  balance         :float            not null
#  watchlist       :string           default(["\"0\""]), is an Array
#

class User < ApplicationRecord
    validates :username, :password_digest, :email, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    before_validation :ensure_session_token

    has_one :account
    has_one :portfolio
    has_many :stock_orders
    has_many :summaries

    has_many :owned_stocks,
        through: :portfolio,
        source: :stocks
        
    attr_reader :password
    
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end

    private

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end

end

