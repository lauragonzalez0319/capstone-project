class EducationalInsightsController < ApplicationController
  include ActionView::Helpers::TextHelper

  def index 
    educational_insights = EducationalInsight.all
    render json: educational_insights
  end

  def show
    content = EducationalInsight.where(id: params[:id]).pluck(:content).map { |content| simple_format(content).delete("\n") }
    render json: content
  end
end
