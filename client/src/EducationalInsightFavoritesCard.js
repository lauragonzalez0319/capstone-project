import { React, useState, useEffect } from 'react';
import { Card, Icon, Button, Image, Modal } from "semantic-ui-react";

function EducationalInsightFavoritesCard({ currentUser, educationalInsight }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [contentParsed, setContentParsed] = useState(null);

  const parse = require('html-react-parser');

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

export default EducationalInsightFavoritesCard