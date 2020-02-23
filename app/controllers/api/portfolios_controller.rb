class Api::PortfoliosController < ApplicationController
    def index
        @portfolio_stocks = current_user.owned_stocks.select(:id, :ticker, :name).map do |stock|
            stock = {id: stock.id, ticker: stock.ticker, name: stock.name}
            api_key = Rails.application.credentials.iex_api_key
            # @stock = Stock.where(ticker: params[:ticker]).or(Stock.where("lower(name) like ?", "%#{params[:ticker]}%".downcase)).first
            stock_url2 = "https://cloud.iexapis.com/stable/stock/#{stock[:ticker]}/intraday-prices/?token=#{api_key}"
            stock[:stock_info2] = HTTParty.get(stock_url2).parsed_response #["quoteResponse"]["result"][0]
            stock_url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=#{stock[:ticker]}"
            stock[:stock_info] = HTTParty.get(stock_url).parsed_response["quoteResponse"]["result"][0]   
            stock      
        end


        # portfolio_stocks = current_user.stock_orders.where("num_stocks > 0")
        # @portfolio_stocks = portfolio_stocks.map do |stock|
        #     ticker = Stock.find(stock.stock_id]).ticker
        #     stock_info = HTTParty.get(stock_url).parsed_response["quoteResponse"]["result"][0]
        # end
    end

    # def show
    #     @stock_id = params[:stock_id]
    #     ticker = Stock.find(params[:stock_id]).ticker
    #     stock_url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=#{ticker}"
    #     @stock_info = HTTParty.get(stock_url).parsed_response["quoteResponse"]["result"][0]
    #     if @stock_info.nil?
    #         render json: ['Unable to fetch stock'], status: 401
    #     else
    #         render 'api/portfolios/show';
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
            render 'api/portfolios/show';
        end
    end


end



