class Api::WatchlistsController < ApplicationController
    def index
        @watchlist = current_user.stock_orders.where("num_stocks = 0")
    end
end
