import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Message, Input, Form, Label, Button} from "semantic-ui-react";

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    const user = {
        email,
        password
    }
    // Logs in user
    fetch(`/login`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            res.json().then(user => {
                onLogin(user)
                navigate(`/mycalendar`)
            })
        }else {
            res.json().then(json => setErrors(json.errors))
        }
    })
   
}

  return (
    <>
      <br></br>
      <div className="login-image-container">
        <img src="/login.png" alt="user creating profile" className="login-image"/>
      </div>
      <div id="login-form-container">
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <Label id="labels" size="huge" htmlFor="email">Email:</Label>
            <Input
              type="text"
              id="email"
              autoComplete="off"
              size="huge"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Label id="labels" size="huge" htmlFor="password">Password:</Label>
            <Input
              size="huge"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Button style={{backgroundColor: "#8bd3dd", color: "black"}} size="huge" variant="fill" color="pink" type="submit">
              Login
            </Button>
          </Form.Field>
          <Form.Field>
          <Message
            error
            header='There was some errors with your submission'
            list={errors}
          />
          </Form.Field>
        </Form>
      </div>
    </>
  );
}

export default LoginForm;
