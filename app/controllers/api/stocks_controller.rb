class Api::StocksController < ApplicationController
    def index
        @stocks = Stock.all
        if @stocks.nil?
            render json: ['Unable to fetch stocks'], status: 401
        else 
            render 'api/stocks/index';
        end
    end
    
    def show
        api_key = Rails.application.credentials.iex_api_key
        @stock = Stock.where(ticker: params[:ticker]).or(Stock.where("lower(name) like ?", "%#{params[:ticker]}%".downcase)).first
        ticker = @stock.ticker
        puts params[:option]
        stock_url = "https://cloud.iexapis.com/stable/stock/#{ticker}/intraday-prices/?token=#{api_key}"
        # stock_url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=#{ticker}"
        @stock_info = HTTParty.get(stock_url).parsed_response #["quoteResponse"]["result"][0]
        @ticker = ticker
        if @stock_info.nil?
            render json: ['Unable to fetch stock'], status: 401
        else
            render 'api/stocks/show';
        end
    end
    
    private
    
    def stock_params
        params.require(:stock).permit(:ticker, :name)
    end
end

