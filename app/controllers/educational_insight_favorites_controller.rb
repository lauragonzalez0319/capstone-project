class EducationalInsightFavoritesController < ApplicationController
  def index
    educational_ids = EducationalInsightFavorite.where(user_id: @current_user.id).pluck(:educational_insight_id)
    favorites = EducationalInsight.where(id: educational_ids)
    render json: favorites, status: :ok
  end
  
  def create
    article_to_favorite = EducationalInsightFavorite.find_or_create_by(educational_insight_favorites_params)
    educational_insight_favorited = EducationalInsight.where(id: params[:educational_insight_id])
    render json: educational_insight_favorited, status: :created
  end

  def destroy
    article_to_unfavorite = EducationalInsightFavorite.find(params[:id])
    article_to_unfavorite.destroy
    head :no_content
  end

  private
  
  def educational_insight_favorites_params
    params.permit(:id, :educational_insight_id, :user_id)
  end
end
