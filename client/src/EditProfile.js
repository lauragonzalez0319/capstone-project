import React from 'react';
import { useState } from 'react';
import { Button, Form, Dropdown, Input, Label } from 'semantic-ui-react';

function EditProfile({ onEditProfile }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [identifyAs, setIdentifyAs] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [menstruating, setMenstruating] = useState(true);
  const [birthControlMethod, setBirthControlMethod] = useState(""); 
  const [errors, setErrors] = useState([]);

  const identifyAsOptions = [
    {key: 'Woman', text: 'Woman', value: 'Woman'}, 
    {key: 'Man', text: 'Man', value: 'Man'},
    {key: 'Transgender', text: 'Transgender', value: 'Transgender'},
    {key: 'Non-binary', text: 'Non-binary', value: 'Non-binary'}
  ]

  const menstruatingOptions = [
    {key: 'yes', text: 'yes', value: true}, 
    {key: 'no', text: 'no', value: false}
  ]

  const birthControlOptions = [
    {key: 'Oral Contraception', text: 'Oral Contraception', value: 'Oral Contraception'},
    {key: 'Intrauterine Contraception', text: 'Intrauterine Contraception', value: 'Intrauterine Contraception'}, 
    {key: 'Implant', text: 'Implant', value: 'Implant'},
    {key: 'Injection', text: 'Injection', value: 'Injection'},
    {key: 'Patch', text: 'Patch', value: 'Patch'},
    {key: 'Hormonal Vaginal Contraceptive Ring', text: 'Hormonal Vaginal Contraceptive Ring', value: 'Hormonal Vaginal Contraceptive Ring'},
    {key: 'Barrier Method', text: 'Barrier Method (condom or diaphragm)', value: 'Barrier Method'},
    {key: 'None', text: 'None', value: 'None'}
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
        menstruating
    }
    onEditProfile(postReqObj)
  }

  return (
    <>
    <Form onSubmit={handleSubmit} >
      <Form.Field>
      <Label color="blue" size="massive" pointing="below" htmlFor="email">Email:</Label>
        <Input
          size="huge"
          placeholder="email"
          type="text"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Label color="blue" size="massive" pointing="below" htmlFor="password">Password:</Label>
        <Input
          size="huge"
          placeholder="Password"
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
      />
      </Form.Field>
      <Form.Field className="form-text">
        <Label color="blue" size="massive" pointing="below">First Name:</Label>
        <Input 
        placeholder='Name'
        size="huge" 
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)} 
      />
      </Form.Field>
      <Form.Field className="form-text">
        <Label color="blue" size="massive" pointing="below">Last Name:</Label>
        <Input 
        placeholder='Last Name'
        size="huge" 
        value={lastName}
        onChange={(event) => setLastName(event.target.value)} 
      />
      </Form.Field>
      <Form.Field className="form-text">
        <Label color="blue" size="massive" pointing="below">Age:</Label>
        <Input placeholder='Age'
        size="huge" 
        value={age}
        onChange={(event) => setAge(event.target.value)} 
      />
      </Form.Field>
      <Label color="blue" size="massive" pointing="below">What do you identify as?</Label>
      <Dropdown 
        style={{ fontSize: "25px" }}
        text="What do you identify as?"
        placeholder="What do you identify as?"
        fluid selection
        options={identifyAsOptions} 
        size="massive"
        value={identifyAs}
        onChange={(event,data) => setIdentifyAs(data.value)}
      />
      <Form.Field className="form-text">
        <Label color="blue" size="massive" pointing="below">Weight:</Label>
        <Input placeholder='Weight'
        size="huge" 
        value={weight}
        onChange={(event) => setWeight(event.target.value)} 
      />
      </Form.Field>
      <Form.Field className="form-text">
        <Label color="blue" size="massive" pointing="below">Height:</Label>
        <Input 
        placeholder='height'
        size="huge"
        value={height}
        onChange={(event) => setHeight(event.target.value)} 
      />
      </Form.Field>
      <br></br>
      <Label color="blue" size="massive" pointing="below">Do you currently menstruate?</Label>
      <Dropdown 
        style={{ fontSize: "25px" }}
        fluid selection
        options={menstruatingOptions} 
        size="huge"
        value={menstruating}
        onChange={(event,data) => setMenstruating(data.value)}
      />
      <br></br>
      <Label color="blue" size="massive" pointing="below">What is your current birth control method?</Label>
      <Dropdown 
        style={{ fontSize: "25px" }}
        fluid selection
        options={birthControlOptions} 
        size="huge"
        value={birthControlMethod}
        onChange={(event,data) => setBirthControlMethod(data.value)}
      />
      <br></br>
      <Form.Field>
        {/* <Message
          error
          header='There was some errors with your submission'
          list={errors}
        /> */}
      </Form.Field>
      <Button color="pink" size="massive" type='submit'>Submit</Button>
    </Form>
      {errors? <div>{errors}</div>:null}
    </>
  )
}

export default EditProfile