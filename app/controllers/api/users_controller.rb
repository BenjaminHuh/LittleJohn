class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.balance = 0;

    if @user.save
      signin(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end
  

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
