import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Form, Dropdown, Input, Label, Message, Header, Grid } from 'semantic-ui-react';
import Calendar from 'react-calendar';
import './SignUpCalendar.css';

function SignUpFormThree({ onSignUpThree }) {
  const [lastRoutineCheckUpDate, setLastRoutineCheckUpDate] = useState(new Date());
  const [routineCheckUpNotificationOn, setRoutineCheckUpNoticationOn] = useState(true);
  const [selfBreastExamNotificationOn, setSelfBreastExamNoticationOn] = useState(true);

  const navigate = useNavigate();

  const yesOrNoOptions = [
    {key: 'Yes', text: 'Yes', value: true}, 
    {key: 'No', text: 'No', value: false}
  ]

  function handleSubmit(e) {
    e.preventDefault()
    const patchReqObj = {
      routine_checkup_notification_on: routineCheckUpNotificationOn,
      self_breast_exam_notification_on: selfBreastExamNotificationOn,
      title: "Routine Checkup",
      all_day: true,
      start: lastRoutineCheckUpDate,
      end: lastRoutineCheckUpDate
    }
    onSignUpThree(patchReqObj);
    navigate(`/mycalendar`);
  }

  return (
    <div>
      <div className="signup-image-container">
        <img src="/signup.png" alt="user creating profile" className="signup-image"/>
      </div>
      <Grid>
      <Grid.Row style={{position: "absolute", left: "350px"}}>
      <Grid.Column textAlign='center' width={10}>
      <Form onSubmit={handleSubmit} style={{width: "50%", display: "inline-block"}}>
      <Header size="large" textAlign='center'>Select the date of your last yearly routine gynecologist visit on the calendar below:</Header>
          <div id="signup-calendar-container">
            <Calendar 
              value={lastRoutineCheckUpDate}
              onChange={setLastRoutineCheckUpDate} 
            />
          </div>
          <br></br>
          <Label id="labels" size="huge" pointing="below">Would you like a reminder to perform your monthly self-breast exam? 
          You'll get it five days after your period ends and you can change this later.</Label>
          <Dropdown 
            style={{ fontSize: "18px" }}
            fluid selection
            options={yesOrNoOptions} 
            value={selfBreastExamNotificationOn}
            onChange={(event) => setSelfBreastExamNoticationOn(event.target.value)}
          />
          <Label id="labels" size="huge" pointing="below">Would you like a reminder when you are due for a yearly routine check up with your gynecologist? 
          You can change this later.</Label>
          <Dropdown 
            style={{ fontSize: "18px" }}
            fluid selection
            options={yesOrNoOptions} 
            value={routineCheckUpNotificationOn}
            onChange={(event) => setRoutineCheckUpNoticationOn(event.target.value)}
          />
      <Button style={{backgroundColor: "#8bd3dd", color: "black"}} size="huge" type='submit'>Sign Up</Button>
      </Form>
      </Grid.Column>
      </Grid.Row>
      </Grid>
    </div>
  )
}

export default SignUpFormThree