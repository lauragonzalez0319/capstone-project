import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Form, Dropdown, Input, Label, Message, Header, Grid } from 'semantic-ui-react';
import Calendar from 'react-calendar';
import NumericInput from 'react-numeric-input';
import './SignUpCalendar.css';

function SignUpFormTwo({ onSignUpTwo }) {
  const navigate = useNavigate();

  const [lastCyleInputVisible, setLastCycleInputVisible] = useState(false);

  const [menstruating, setMenstruating] = useState(null);
  const [averageCycleLength, setAverageCycleLength] = useState("");
  const [periodNotificationOn, setPeriodNoticationOn] = useState(true);
  const [lastCycleDate, setLastCycleDate] = useState(new Date());

  const yesOrNoOptions = [
    {key: 'Yes', text: 'Yes', value: true}, 
    {key: 'No', text: 'No', value: false}
  ]

  function handleSubmit(e) {
    e.preventDefault()
    const patchReqObj = {
      menstruating,
      average_cycle_length: averageCycleLength,
      period_notification_on: periodNotificationOn,
      title: "Period",
      all_day: true,
      start: lastCycleDate[0],
      end: lastCycleDate[1]
    }
    onSignUpTwo(patchReqObj)
    navigate(`/signupthree`)
  }

  return (
    <div>
      <br></br>
      <div className="signup-image-container">
        <img src="/signuptwo.png" alt="user creating profile" className="signup-image"/>
      </div>
      <Grid>
      <Grid.Row style={{position: "absolute", left: "350px"}}>
      <Grid.Column textAlign='center' width={10}>
      <Form onSubmit={handleSubmit} style={{width: "50%", display: "inline-block"}}>
      <Header as='h2' textAlign='center' block style={{backgroundColor: "#90b4ce"}}> Sign Up 2/3</Header>
      <Label id="labels" size="huge" pointing="below">Do you currently menstruate?</Label>
        <Dropdown 
          style={{ fontSize: "18px" }}
          fluid selection
          options={yesOrNoOptions} 
          value={menstruating}
          onChange={(event,data) => {
          setMenstruating(data.value);
          data.value === true ? setLastCycleInputVisible(true) : setLastCycleInputVisible(false);
          }}
        />
         <br></br>
        { lastCyleInputVisible === true ? ( 
          <div>
            <Header size="large" textAlign='center'>Select your last period date range on the calendar below:</Header>
            <div id="signup-calendar-container">
              <Calendar 
                allowPartialRange={false}
                selectRange={true}
                onChange={setLastCycleDate}
                value={lastCycleDate} 
                />
            </div>
            <br></br>
            <Form.Field className="form-text">
              <Label id="labels" size="huge" pointing="below" htmlFor="email">How long is your average cycle?</Label>
              <br/>
              <NumericInput
                min={0} 
                max={100}
                onChange={(valueAsNumber) => setAverageCycleLength(valueAsNumber)}
              />
            </Form.Field>
            <Label id="labels" size="huge" pointing="below">Would you like a reminder before your next period? 
            You'll get it two days before your period starts and you can change this later.</Label>
            <Dropdown 
              style={{ fontSize: "18px" }}
              fluid selection
              options={yesOrNoOptions} 
              value={periodNotificationOn}
              onChange={(event, data) => setPeriodNoticationOn(data.value)}
            />
          </div>
        ) : (<></>)}
        <br></br>
      <Button style={{backgroundColor: "#8bd3dd", color: "black"}} size="huge" type='submit'>Next</Button>
      </Form>
      </Grid.Column>
      </Grid.Row>
      </Grid>
      {/* {errors? <div>{errors}</div>:null} */}
    </div>
  )
}

export default SignUpFormTwo