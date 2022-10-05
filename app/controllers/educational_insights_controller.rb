class EducationalInsightsController < ApplicationController
  def index 
    educational_insights = EducationalInsight.all
    render json: educational_insights
  end
end
