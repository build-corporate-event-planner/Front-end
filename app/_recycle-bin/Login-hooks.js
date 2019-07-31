import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useHttpLogin } from './http'
import { Alerts, Register } from '../'

function Login(props) {

  // Declare the login state variables
  const [username, setUser] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [errMsg, setErrMsg] = useState(null);

  useHttpLogin(username, currentPassword, [isValid, isLoading])

  const handleChange = (e) => {
		e.preventDefault()

    switch (e.target.name) {
      case "username": setUser(e.target.value); // JohnTheAirGuitarSmith
      case "current-password": setCurrentPassword(e.target.value); // NotPassword1234
    }
  }

  const handleSubmit = (e) => {
		e.preventDefault()

    // Check for undefined or empty input fields
    if (!username || !currentPassword) {
      setErrMsg("Please enter a valid Username and password.");
    } else {
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
          <Input type="text" name="username" placeholder="Username" autocomplete="username" 
            value={username} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="current-password" placeholder="Password" autocomplete="current-password" 
            value={currentPassword} onChange={handleChange} />
        </FormGroup>

				{props.isLoading
					? <p>Logging in...</p>
					: <Button type="submit" disabled={isLoading} block={true}>Login</Button>}
      </Form>

      <Link to='/register'> Register a New User </Link>

    </div>
  )
}

export default withRouter(Login)
