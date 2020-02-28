class Api::SummariesController < ApplicationController
    def create        
        User.all.each do |user|
            summary = Summary.new(:user_id => user.id, 
                :balance => user.balance, 
                :date => Date.today.to_s
            )

            summary[:stocks] = {}
            close = 0
            user.owned_stocks.select(:id, :ticker, :name).uniq.each do |stock|
                summary[:stocks][stock.id] = {
                        :ticker => stock.ticker,
                        :name => stock.name,
                        :num_stocks => user.owned_stocks.where(id: stock.id).sum(:num_stocks)                        
                }
    
                stock_url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=#{stock.ticker}"
                market_close = HTTParty.get(stock_url).parsed_response["quoteResponse"]["result"][0]["regularMarketPrice"]
                close += summary[:stocks][stock.id][:num_stocks] * market_close
            end
            summary[:close] = close
            summary[:total] = user.balance + close
  
            summary.save
        end

        render json: "Success"
    end

    def index
        @summaries = Summary.where(user_id: params[:user_id]) 
    end

end
