import React from 'react'
import { Card, Icon, Button, Image, List } from "semantic-ui-react";

function EducationalInsightCard({ educationalInsight}) {
  
  return (
    <div>
      <Card>
          <div className="card-img-container">
            <Image className="card-img" src={educationalInsight.image} />
          </div>
        <Card.Content>
          <Card.Header textAlign= "center">{educationalInsight.title}</Card.Header>
        </Card.Content>
        <Button style={{ fontSize: "20px" }} >
          <Icon name="heart" floated="right"  color="pink"/>
          Favorite
        </Button>
      </Card>
    </div>
  )
}

export default EducationalInsightCard