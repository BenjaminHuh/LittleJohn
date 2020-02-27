class Api::StockOrdersController < ApplicationController
    def create
        @stock_order = StockOrder.new(stock_order_params)
        if @stock_order.save
            stock = Stock.find(params[:stock_order][:stock_id])
            redirect_to controller: 'stocks', action: 'show', ticker: stock.ticker
        end
    end

    

    private
    
    def stock_order_params
        params.require(:stock_order).permit(:user_id, :num_stocks, :stock_id)
    end
end
