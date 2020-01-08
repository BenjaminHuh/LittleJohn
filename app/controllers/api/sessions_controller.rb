class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user.nil?
          render json: ['Unable to log in with provided credentials.'], status: 401
        else
          signin(@user)
          render 'api/users/show';
        end
      end
    
      def destroy
        @user = current_user
        if @user
          logout
          render json: { message: 'Logout successful.' }
        else
          render json: ["No signed in user"], status: 404
        end
      end
end
