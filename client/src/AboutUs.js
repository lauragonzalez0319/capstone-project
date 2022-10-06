import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, Header, Icon, Image, Label } from 'semantic-ui-react';

function AboutUs({ currentUser}) {
  const [stylingId, setStylingId] = useState("");

  useEffect(() => {
    currentUser === null ? setStylingId("-null") : setStylingId("-loggedin")
  }, [currentUser])

  function visitProjectGithub() {
    window.open('https://github.com/lauragonzalez0319/flomind');
  }

  function visitLinkedin() {
    window.open('https://www.linkedin.com/in/lauragonzalez0319/');
  }

  function visitMyGithub() {
    window.open('https://github.com/lauragonzalez0319');
  }

  function visitMedium() {
    window.open('https://medium.com/@lauragonzalez0319');
  }

  return (
    <div>
    <div id={`aboutus${stylingId}-text-container`}>
      <br/>
       <Container fluid text style={{fontSize: "20px", backgroundColor: "white", padding: "20px"}}>
        <Header textAlign="center" as='h1' block style={{backgroundColor: "rgb(159, 133, 125)"}}>About Us</Header>
        <Header textAlign="center" as='h2' block style={{backgroundColor: "rgb(233, 209, 146)"}}>Meet The Developer</Header>
        <br/>
        <p>
        Laura Gonzalez is an aspiring software engineer who built this solo-projuect application after her mother received abnormal mammogram results.
        Thankfully, the biopsy results concluded the growth was benign, but it served one of life's big wake up calls to place priority on health. She
        realized the importance of her mother following the preventative measure of a yearly mammogram over 40 and came to realize how often she neglects her own
        health due to forgetfulness. She goes too long without a yearly routine checkup and performing a month self breast exam. While many cycle tracking apps are 
        out the market, Laura saw a gap in applications that put emphasis not only on your cycle but on preventative health measures that follow their own cycle too.
        In addition, not every app had a educational aspect to it. And with such a complex issue such as womxn's health, education is imperative.
        So, Laura took the initiative to make an app that filled that gap in 2.5 weeks time. Following this, Laura hopes to expand the app in the following ways:
        </p>
        <br/>
        <Header textAlign="center" as='h2' block style={{backgroundColor: "rgb(233, 209, 146)"}}>Future Development Goals</Header>
          <ul>
            <li>Implementing a web push notification system for the individualized event reminders</li>
            <li>Symptom tracking</li>
            <li>Resources section for healthcare facilities near you</li>
            <li>Dynamic period prediction that adjusts based on your period inputs, not just your average cycle length on sign up</li>
            <li>Support chat feature</li>
            <li>Fertility tracking</li>
            <li>Expanded Educational Content</li>
          </ul>
          <Header textAlign="center" as='h2' block style={{backgroundColor: "rgb(233, 209, 146)"}}>Specs</Header>
          <p>
            Open Source
            Frontend: React (Javascript)
            Backend: Ruby on Rails (Postgres)
          </p>
          <div id="aboutus-buttons-container">
            <Button onClick={visitProjectGithub} icon circular size="huge" color="black">
              <Icon name="github square" color="white" size="big"></Icon>
            </Button>
            <Label as='a' basic pointing='left' size="huge">Project Github Repository</Label>
            </div>
          <Header textAlign="center" as='h2' block style={{backgroundColor: "rgb(233, 209, 146)"}}>Follow My Coding Journey</Header>
          <div id="aboutus-buttons-container">
            <Button onClick={visitLinkedin} icon circular color="blue" size="huge">
              <Icon name="linkedin" size="big"></Icon>
            </Button>
            <Button onClick={visitMyGithub} icon circular size="huge" color="black">
              <Icon name="github square" size="big"></Icon>
            </Button>
            <Button onClick={visitMedium} icon circular size="huge">
              <Icon name="medium" size="big" color="black"></Icon>
            </Button>
          </div>
      </Container>
    </div>
    <Image id={`aboutus${stylingId}-image-one`} circular size="medium" src="/aboutusone.png"></Image>
    <Image id={`aboutus${stylingId}-image-two`} circular size="medium" src="/Headshot.jpeg"></Image>
    </div>
  )
}

export default AboutUs