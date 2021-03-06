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
        @stock = Stock.find_by_ticker(params[:ticker])
        @num_stocks = { num_stocks: current_user.stock_orders.where(stock_id: @stock.id).sum(:num_stocks) }
        if @stock.nil?
            render json: ['Unable to fetch stock'], status: 401
        else
            # @stock = Stock.where(ticker: params[:ticker]).or(Stock.where("lower(name) like ?", "%#{params[:ticker]}%".downcase)).first
            ticker = @stock.ticker
            stock_url2 = "https://cloud.iexapis.com/stable/stock/#{ticker}/intraday-prices/?token=#{api_key}"
            @stock_info2 = HTTParty.get(stock_url2).parsed_response #["quoteResponse"]["result"][0]
            stock_url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=#{ticker}"
            @stock_info = HTTParty.get(stock_url).parsed_response["quoteResponse"]["result"][0]

            company_url = "https://cloud.iexapis.com/stable/stock/#{ticker}/company?token=#{api_key}"
            @company = HTTParty.get(company_url).parsed_response

            @ticker = ticker
            if @stock_info.nil? || @stock_info2.nil?
                render json: ['Unable to fetch stock'], status: 401
            else
                render 'api/stocks/show';
            end
        end
    end
    
    
    private
    
    def stock_params
        params.require(:stock).permit(:ticker, :name)
    end
end

