class Api::NewsController < ApplicationController
    def show
        key = Rails.application.credentials.news_api_key
        params[:topic] == "STOCK MARKET" ? topic = "STOCK MARKET" : topic = Stock.where(ticker: params[:topic].upcase)[0].name;
        news_url = "https://newsapi.org/v2/everything?q=#{topic}&apiKey=#{key}"
        # news_url = "https://newsapi.org/v2/everything?q=#{params[:topic]}&apiKey=#{key}"
        @news = HTTParty.get(news_url).parsed_response["articles"]
        if @news.nil?
            render json: ['Unable to fetch news'], status: 401
        else
            render 'api/news/show';
        end
    end

end
