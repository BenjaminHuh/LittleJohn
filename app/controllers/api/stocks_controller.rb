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
        # @stock = Stock.find_by_ticker(params[:ticker])
        # ticker = @stock.ticker
        # stock_url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=#{ticker}"
        stock_url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=#{params[:ticker]}"
        @stock_info = HTTParty.get(stock_url).parsed_response["quoteResponse"]["result"][0]
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

