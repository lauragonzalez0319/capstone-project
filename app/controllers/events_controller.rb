class EventsController < ApplicationController
  skip_before_action :authenticate

  def index
    events = Event.all
    render json: events, status: :ok
  end

  def show 
    event = Event.find(params[:id])
    render json: event, status: :ok
  end

  def create
    event = Event.create(event_params)
    render json: :event
  end

  def destroy 
    event = Event.find(params[:id])
    event.destroy
    head :no_content
  end

  private

   def event_params
    params.permit(:user_id, :title, :start, :end, :all_day)
   end

end
