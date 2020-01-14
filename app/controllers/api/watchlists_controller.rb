class Api::WatchlistsController < ApplicationController
    def index
        @watchlist = current_user.stock_orders.where("num_stocks = 0")
    end

    def show
        @stock_id = params[:stock_id]
        ticker = Stock.find(params[:stock_id]).ticker
        stock_url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=#{ticker}"
        @stock_info = HTTParty.get(stock_url).parsed_response["quoteResponse"]["result"][0]
        if @stock_info.nil?
            render json: ['Unable to fetch stock'], status: 401
        else
            render 'api/watchlists/show';
        end 
    end
end
