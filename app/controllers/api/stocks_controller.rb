class Api::StocksController < ApplicationController

    def show

        @stock = Stock.find(params[:id])

    end
    
    private
    
    def stock_params
        params.require(:stock).permit(:ticker, :name)
    end
end

