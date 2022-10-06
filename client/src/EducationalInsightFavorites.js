import React from 'react';
import { Card } from "semantic-ui-react";
import EducationalInsightFavoritesCard from './EducationalInsightFavoritesCard';

function EducationalInsightFavorites({ currentUser, educationalInsightFavorites }) {
  
  const favoritePreviewsToDisplay = educationalInsightFavorites.map((educationalInsight) => (
    <EducationalInsightFavoritesCard key={educationalInsight.id} educationalInsight={educationalInsight}
    currentUser={currentUser}
    />
  ))

  return (
    <div id="cards-container">
    <Card.Group centered itemsPerRow={2}>
            {favoritePreviewsToDisplay}
    </Card.Group>
    </div>
  )
}

export default EducationalInsightFavorites