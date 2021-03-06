class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.balance = 0;

    if @user.save
      signin(@user)
      Portfolio.create!(user_id: @user.id)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end
  
  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    render "api/users/show"
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :balance, :watchlist => [])
  end
end
