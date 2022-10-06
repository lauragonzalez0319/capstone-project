import { React, useState, useEffect } from 'react'
import { Card, Icon, Button, Image, Modal } from "semantic-ui-react";

function EducationalInsightCard({ currentUser, educationalInsight, handleArticleFavorite, handleArticleUnFavorite}) {
  const [favorited, setFavorited] = useState(false)
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [contentParsed, setContentParsed] = useState(null);

  // console.log("in card:", educationalInsightFavorites)
  // useEffect(() => {
  //   if (educationalInsightFavorites != null) {
  //     educationalInsightFavorites.map((educationalInsightFavorite) => {
  //       if (educationalInsightFavorite["educational_insight_id"] === educationalInsight.id) {
  //         console.log(educationalInsightFavorite["educational_insight_id"] === educationalInsight.id)
  //         setFavorited(true)   
  //       }
  //     })
  //   }
  // }, [educationalInsightFavorites])

  const parse = require('html-react-parser');

  function onArticleFavoriteClick() {
    setFavorited(!favorited);
    favorited ? handleArticleUnFavorite(educationalInsight.id) : handleArticleFavorite(educationalInsight.id);
  }

  useEffect(() => {
    if (currentUser != null) {
      fetch(`/educational_insights/${educationalInsight.id}`)
      .then((r) => r.json())
      .then((data) => {
        setContent(data)
      })
    }
  }, [currentUser]);

  useEffect(() => {
    if (content != null) {
      setContentParsed(parse(content[0]))
    }
  }, [content])

  return (
    <div>
      <Card fluid>
        <Card.Content>
          <Card.Header style={{backgroundColor: "rgb(159, 133, 125)", padding: "7px", fontSize: "20px"}} textAlign= "center">{educationalInsight.title}</Card.Header>
        </Card.Content>
        <div id="card-img-container">
          <Image id="card-img" src={educationalInsight.image} />
        </div>
        <Card.Content textAlign="center" extra>
            <Button style={{ fontSize: "18px" }} onClick={onArticleFavoriteClick}>
              <Icon name="bookmark" floated="right"  color={favorited ? "pink" : "grey"}/>
              {favorited ? "Remove Bookmark" : "Bookmark"}
            </Button>
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              trigger={<Button style={{ fontSize: "18px" }}><Icon name="book" floated="right" color="blue"/>Read More</Button>}
            >
            <Modal.Header style={{fontSize: "22px"}}>{educationalInsight.title}</Modal.Header>
            <Modal.Content scrolling>
              <Image centered size='massive' src={educationalInsight.image} wrapped />
              <Modal.Description style={{fontSize: "18px"}}>
              {contentParsed}
              Source: {educationalInsight.source}
              <br/>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={() => setOpen(false)} primary>
                Proceed <Icon name='chevron right' />
              </Button>
            </Modal.Actions>
            </Modal>
        </Card.Content>
      </Card>
    </div>
  )
}

export default EducationalInsightCard