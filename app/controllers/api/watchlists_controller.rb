class Api::WatchlistsController < ApplicationController
    def index
        @watchlist = Watchlist.find_by_user_id(current_user.id).stocks
    end
end
