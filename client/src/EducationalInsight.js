import React from 'react'
import { Card } from "semantic-ui-react";
import EducationalInsightCard from './EducationalInsightCard';

function EducationalInsight({ educationalInsights }) {
  
  const articlePreviewsToDisplay = educationalInsights.map((educationalInsight) => (
    <EducationalInsightCard key={educationalInsight.id} educationalInsight={educationalInsight} />
  ))

  return (
    <div>
    <Card.Group centered itemsPerRow={4}>
            {articlePreviewsToDisplay}
    </Card.Group>
    </div>
  )
}

export default EducationalInsight