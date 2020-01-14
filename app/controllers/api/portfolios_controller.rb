class Api::PortfoliosController < ApplicationController
    def index
        @portfolio_stocks = current_user.stock_orders.where("num_stocks > 0")
        # @porfolio = current_user.portfolio.id
    end

    def show
        ticker = Stock.find(params[:stock_id]).ticker
        stock_url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=#{ticker}"
        @stock_info = HTTParty.get(stock_url).parsed_response["quoteResponse"]["result"][0]
        if @stock_info.nil?
            render json: ['Unable to fetch stock'], status: 401
        else
            render 'api/portfolios/show';
        end
    end

end
