import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Form, Dropdown, Input, Label, Message, Header, Grid } from 'semantic-ui-react';
import Calendar from 'react-calendar';
import NumericInput from 'react-numeric-input';
import './SignUpCalendar.css';

function SignUpFormOne({ onSignUpOne }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [identifyAs, setIdentifyAs] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [birthControlMethod, setBirthControlMethod] = useState("");
  const [mammogramNotificationOn, setMammogramNoticationOn] = useState(true);
  const [fortyOrOverInputVisible, setFortyOrOverInputVisible] = useState(false);
  const [lastMammogramDate, setLastMammogramDate] = useState(new Date());


  const [errors, setErrors] = useState([]);

  const identifyAsOptions = [
    {key: 'Woman', text: 'Woman', value: 'Woman'}, 
    {key: 'Man', text: 'Man', value: 'Man'},
    {key: 'Non-binary', text: 'Non-binary', value: 'Non-binary'},
    {key: 'Other', text: 'Other', value: 'Other'},
  ]

  const birthControlOptions = [
    {key: 'None', text: 'None', value: 'None'},
    {key: 'Oral Contraception', text: 'Oral Contraception', value: 'Oral Contraception'},
    {key: 'Intrauterine Contraception', text: 'Intrauterine Contraception', value: 'Intrauterine Contraception'}, 
    {key: 'Implant', text: 'Implant', value: 'Implant'},
    {key: 'Injection', text: 'Injection', value: 'Injection'},
    {key: 'Patch', text: 'Patch', value: 'Patch'},
    {key: 'Hormonal Vaginal Contraceptive Ring', text: 'Hormonal Vaginal Contraceptive Ring', value: 'Hormonal Vaginal Contraceptive Ring'},
    {key: 'Barrier Method', text: 'Barrier Method (condom or diaphragm)', value: 'Barrier Method'},
    {key: 'Fertility Awareness Method', text: 'Fertility Awareness Method', value: 'Fertility Awareness Method'}
  ]

  const yesOrNoOptions = [
    {key: 'Yes', text: 'Yes', value: true}, 
    {key: 'No', text: 'No', value: false}
  ]

  function handleSubmit(e) {
    e.preventDefault()
    const postReqObj = {
        email,
        password, 
        first_name: firstName,
        last_name: lastName,
        identify_as: identifyAs,
        age,
        weight,
        height,
        birth_control_method: birthControlMethod,
        mammogram_notification_on: mammogramNotificationOn,
        title: "Mammogram",
        all_day: true,
        start: lastMammogramDate,
        end: lastMammogramDate,
    }
       
    fetch(`/users`, {
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(postReqObj)
    })
    .then(res => {
        if(res.ok){
            res.json().then(user => {
              onSignUpOne(user)
              navigate(`/signuptwo`)
            })
        } else {
            // res.json().then(json => setErrors(Object.entries(json.errors)))
        }
    })
  }
  
  // useEffect(() => {
  //   console.log(lastMammogramDate)
  // }, [lastMammogramDate])

  return (
    <div>
      <br></br>
      <div className="signup-image-container">
        <img src="/signup.png" alt="user creating profile" className="signup-image"/>
      </div>
      <Grid>
      <Grid.Row style={{position: "absolute", left: "350px"}}>
      <Grid.Column textAlign='center' width={10}>
      <Header as='h2' textAlign='center' block style={{backgroundColor: "#90b4ce"}}> Sign Up 1/3</Header>
      <Form onSubmit={handleSubmit} style={{width: "50%", display: "inline-block"}}>
        <Form.Field className="form-text">
        <Label id="labels" size="huge" pointing="below" htmlFor="email">Email:</Label>
          <Input
            size="small"
            placeholder="Email"
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Field>
        <Form.Field className="form-text">
          <Label id="labels" size="huge" pointing="below" htmlFor="password">Password:</Label>
          <Input
            size="small"
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
        />
        </Form.Field>
        <Form.Field className="form-text">
          <Label id="labels" size="huge" pointing="below">First name:</Label>
          <Input 
          placeholder='First name'
          size="small" 
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)} 
        />
        </Form.Field>
        <Form.Field className="form-text">
          <Label id="labels" size="huge" pointing="below">Last name:</Label>
          <Input 
          placeholder='Last name'
          size="small" 
          value={lastName}
          onChange={(event) => setLastName(event.target.value)} 
        />
        </Form.Field>
        <Form.Field className="form-text">
          <Label id="labels" size="huge" pointing="below">Age:</Label>
          <br></br>
          <NumericInput
            min={0} 
            max={100}
            onChange={(valueAsNumber) => {
              console.log(valueAsNumber)
              setAge(valueAsNumber)
              valueAsNumber >= 40 ? setFortyOrOverInputVisible(true) : setFortyOrOverInputVisible(false);
            }}
          />
        </Form.Field>
        { fortyOrOverInputVisible === true ? ( 
          <div>
            <Header size="large" textAlign='center'>Select the date of your last mammogram on the calendar below:</Header>
            <div id="signup-calendar-container">
              <Calendar 
                value={lastMammogramDate}
                onChange={setLastMammogramDate} 
              />
            </div>
            <br></br>
            <Label id="labels" size="huge" pointing="below">Would you like a reminder when you are due for a yearly mammogram? 
            You can change this later.</Label>
            <Dropdown 
              style={{ fontSize: "18px" }}
              fluid selection
              options={yesOrNoOptions} 
              value={mammogramNotificationOn}
              onChange={(event, data) => setMammogramNoticationOn(data.value)}
            />
          </div>
        ) : (<></>)
        }
        <br></br>
        <Label id="labels" size="huge" pointing="below">What do you identify as?</Label>
        <Dropdown 
          style={{ fontSize: "18px" }}
          placeholder="What do you identify as?"
          fluid selection
          options={identifyAsOptions} 
          size="huge"
          value={identifyAs}
          onChange={(event,data) => setIdentifyAs(data.value)}
        />
        <br></br>
        <Form.Field className="form-text">
          <Label id="labels" size="huge" pointing="below">Weight:</Label>
          <Input 
            placeholder='Weight'
            value={weight}
            onChange={(event) => setWeight(event.target.value)} 
        />
        </Form.Field>
        <Form.Field className="form-text">
          <Label id="labels" size="huge" pointing="below">Height:</Label>
          <Input 
            placeholder='Height'
            size="small"
            value={height}
            onChange={(event) => setHeight(event.target.value)} 
        />
        </Form.Field>
        <br></br>
        <Label id="labels" size="huge" pointing="below">What is your current birth control method?</Label>
        <Dropdown 
          style={{ fontSize: "18px" }}
          fluid selection
          options={birthControlOptions} 
          size="small"
          value={birthControlMethod}
          onChange={(event,data) => setBirthControlMethod(data.value)}
        />
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

export default SignUpFormOne
