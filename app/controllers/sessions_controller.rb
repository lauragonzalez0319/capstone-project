class SessionsController < ApplicationController
  skip_before_action :authenticate, except: :destroy

  # POST '/login'
  def create
    user = User.find_by_email(params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else 
      render json: "Invalid Credentials", status: :unauthorized
    end

  end

  # DELETE '/logout'
  def destroy
    session.delete(:user_id)
    head :no_content
  end

  def reset_session
    @_request.reset_session
  end
  
end