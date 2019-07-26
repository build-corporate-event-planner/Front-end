import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useHttp } from './http'
import { Alerts } from '../'

function Login(props) {

  // Declare the login state variables
  const [username, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [errMsg, setErrMsg] = useState(null);

  useHttp(username, password, [isValid, isLoading])

  const handleChange = (e) => {
		e.preventDefault()

    switch (e.target.name) {
      case "username": setUser(e.target.value); // JohnTheAirGuitarSmith
      case "password": setPassword(e.target.value); // NotPassword1234
    }

  }

  const handleSubmit = (e) => {
		e.preventDefault()

    // Check for undefined or empty input fields
    if (!username || !password) {
      setErrMsg("Please enter a valid Username and password.");
    } else {
      console.log("is Valid")
      setIsValid(true)
    }
		// props.login(username, password)
		// 	.then(() => {
		// 		props.history.push("/")
		// 	})
		// 	.catch((err) => {
		// 		console.error(err)
		// 	})
  

	}

  return (
    <div className="Login">
      <h1>Login</h1>

      {errMsg && <Alerts content={errMsg} style="danger" />}

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input type="text" name="username" placeholder="Username" 
            value={username} onChange={e => setUser(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" placeholder="Password" 
            value={password} onChange={e => setPassword(e.target.value)} />
        </FormGroup>

				{props.isLoading
					? <p>Logging in...</p>
					: <Button type="submit" disabled={isLoading} block={true}>Login</Button>}
      </Form>

    </div>
  )
}

export default withRouter(Login)
