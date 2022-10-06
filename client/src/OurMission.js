import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Image, Button } from 'semantic-ui-react';

function OurMission({ currentUser }) {
  const [stylingId, setStylingId] = useState("-null");

  useEffect(() => {
    currentUser == null ? setStylingId("-null") : setStylingId("-loggedin")
  }, [currentUser])
  
  return (
    <div>
    <div id={`ourmission${stylingId}-text-container`}>
      <br/>
       <Container text style={{fontSize: "20px", backgroundColor: "white", padding: "20px"}}>
        <Header textAlign="center" as='h1' block style={{backgroundColor: "rgb(159, 133, 125)"}}>Our Mission</Header>
        <p>
        Womxn's physical health is delicate and complex, requiring great care and attention. With the many things we must keep track of in our day-to-day lives,
        remembering the routine measures we must take to ensure good health can be overwhelming. Oftentimes, applications provide period tracking and nothing
        else. FloMind takes a more comprehensive, all-encompassing approach. FloMind will help you keep track of not only your period and estimated periods, but also when your self-breast exams, routine checkups, and mammograms are due.
        We often neglect the proactive measures we can take to prevent breast cancer and achieve long term wellbeing, but with FloMinders, you can rest easy knowing an important
        health event won't be forgotten. We'll remember for you. You can also read informative articles to know how to best care for your body.
        </p>
        <p>
         FloMind aims to be an inclusive space for all, valuing health and wellbeing above all. We aim to provide all with a user-centered, individualized tool to ensure the wellbeing of all. 
        </p>
        <Link to="/users/new">
          <Button fluid animated='fade' style={{fontSize: "18px", backgroundColor: " #ffc6c7", color: "black"}}>
            <Button.Content visible>Join Us Today to Help Accomplish Our Mission</Button.Content>
            <Button.Content hidden>Sign Up</Button.Content>
          </Button>
        </Link>
      </Container>
    </div>
    <Image id={`ourmission${stylingId}-image-one`} circular size="medium" src="/ourmissionone.png"></Image>
    </div>
  )
}

export default OurMission