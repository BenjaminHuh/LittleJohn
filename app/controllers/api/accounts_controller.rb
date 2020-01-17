class Api::AccountsController < ApplicationController

    def create
        @account = Account.new(account_params)
        @account.balance = rand(100000...5000000)
        if @account.save!
            redirect_to controller: 'accounts', action: 'index', user_id: params[:user_id]
        else
            render json: @account.errors.full_messages, status: 422
        end
    end

    def index
        @accounts = Account.where(user_id: params[:user_id])
    end

    private
    def account_params
        params.require(:account).permit(:user_id, :balance)
    end
end
