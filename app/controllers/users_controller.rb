class UsersController < ApplicationController
  skip_before_action :authenticate, only: [:create, :user_events]

    def show
      # user = User.find(params[:id])
      # render json: user, status: :ok
      render json: @current_user
    end 


    def create
      user = User.create(email: params[:email], password: params[:password], first_name: params[:first_name],
      last_name: params[:last_name], identify_as: params[:identify_as], age: params[:age], weight: params[:weight], 
      height: params[:height], birth_control_method: params[:birth_control_method], menstruating: params[:menstruating],
      average_cycle_length: params[:average_cycle_length], period_notification_on: params[:period_notification_on],
      self_breast_exam_notification_on: params[:self_breast_exam_notification_on], mammogram_notification_on: params[:mammogram_notification_on],
      routine_checkup_notification_on: params[:routine_checkup_notification_on])
      session[:user_id] = user.id
      event = Event.create(user_id: user.id, title: params[:title], start: params[:start], end: params[:end], all_day: params[:all_day])
      render json: user
    end

    def user_events
      user = User.find(params[:id])
      events = user.events
      render json: events, status: :ok
    end

    def update_user
      user = User.find_by(id: params[:id])
      if params[:menstruating] != nil
        user.update(menstruating: params[:menstruating], average_cycle_length: params[:average_cycle_length], period_notification_on: params[:period_notification_on])
        event = Event.create(user_id: user.id, title: params[:title], start: params[:start], end: params[:end], all_day: params[:all_day])
      else
        user.update(self_breast_exam_notification_on: params[:self_breast_exam_notification_on], routine_checkup_notification_on: params[:routine_checkup_notification_on])
        event = Event.create(user_id: user.id, title: params[:title], start: params[:start], end: params[:end], all_day: params[:all_day])
      end
      render json: user
    end
    
    private 

    def user_params
      params.permit(:email, :password, :first_name, :last_name, :identify_as, :age, :weight, :height, :birth_control_method, :menstruating, :title, :start, :end, :all_day, :average_cycle_length, :period_notification_on, :self_breast_exam_notification_on, :mammogram_notification_on, :routine_checkup_notification_on)
    end 
end
