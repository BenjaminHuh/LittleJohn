class Api::WatchlistsController < ApplicationController
    def index
        @watchlist = current_user.stock_orders.where("num_stocks = 0")
    end

    # def show
    #     @stock_id = params[:stock_id]
    #     ticker = Stock.find(params[:stock_id]).ticker
    #     stock_url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=#{ticker}"
    #     @stock_info = HTTParty.get(stock_url).parsed_response["quoteResponse"]["result"][0]
    #     if @stock_info.nil?
    #         render json: ['Unable to fetch stock'], status: 401
    #     else
    #         render 'api/watchlists/show';
    #     end 
    # end


    def show
        api_key = Rails.application.credentials.iex_api_key
        @stock_id = params[:stock_id]
        ticker = Stock.find(params[:stock_id]).ticker
        # @stock = Stock.where(ticker: params[:ticker]).or(Stock.where("lower(name) like ?", "%#{params[:ticker]}%".downcase)).first
        stock_url2 = "https://cloud.iexapis.com/stable/stock/#{ticker}/intraday-prices/?token=#{api_key}"
        @stock_info2 = HTTParty.get(stock_url2).parsed_response #["quoteResponse"]["result"][0]
        stock_url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=#{ticker}"
        @stock_info = HTTParty.get(stock_url).parsed_response["quoteResponse"]["result"][0]
        @ticker = ticker
        if @stock_info.nil? || @stock_info2.nil?
            render json: ['Unable to fetch stock'], status: 401
        else
            render 'api/watchlists/show';
        end
    end    
end
