import React from 'react'
import { Card } from "semantic-ui-react";
import EducationalInsightCard from './EducationalInsightCard';

function EducationalInsights({ currentUser, educationalInsights, handleArticleFavorite, handleArticleUnFavorite }) {
  
  const articlePreviewsToDisplay = educationalInsights.map((educationalInsight) => (
    <EducationalInsightCard key={educationalInsight.id} educationalInsight={educationalInsight} handleArticleFavorite={handleArticleFavorite}
      handleArticleUnFavorite={handleArticleUnFavorite} currentUser={currentUser}
    />
  ))

  return (
    <div id="cards-container">
      <Card.Group centered itemsPerRow={1}>
              {articlePreviewsToDisplay}
      </Card.Group>
    </div>
  )
}

export default EducationalInsights