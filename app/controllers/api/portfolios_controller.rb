class Api::PortfoliosController < ApplicationController
    def index
        @portfolio = Portfolio.find_by_user_id(current_user.id).stocks
    end

end
