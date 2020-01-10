class Api::StocksController < ApplicationController
    def show
        @stock = Stock.find_by_ticker(params[:ticker])
        ticker = @stock.ticker
        stock_url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=#{ticker}"
        @stock_info = HTTParty.get(stock_url).parsed_response["quoteResponse"]["result"][0]

    end
    
    private
    
    def stock_params
        params.require(:stock).permit(:ticker, :name)
    end
end

