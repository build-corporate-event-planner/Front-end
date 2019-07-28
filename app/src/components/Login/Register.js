import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Alert, Button, Form, InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import { useHttpRegister } from './http'
// import { Alerts } from '../'

function Register(props) {

  // Declare the login state variables
  const [user, setUser] = useState( {} )
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [checkNewPassword, setCheckNewPassword] = useState("")
  const [role, setRole] = useState("")
  const [companyname, setCompany] = useState("")
  
  const [isLoading, setIsLoading] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [errMsg, setErrMsg] = useState(null);

  const result = useHttpRegister(user, [isValid, isLoading])

  // if (result != ""){ setErrMsg(result) }

  const handleSubmit = (e) => {
		e.preventDefault()
        
    // Check for undefined or empty input fields
    if (!username) {
      setErrMsg("Please enter a valid Username.");
      return "Please enter a valid Username."
    }
    if (!username || !newPassword) {
      setErrMsg("Please enter a valid Username and password.");
      return "Please enter a valid Username and password."
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
  

    const user = {
      // username and email must be unique
      "username": "testuser",
      "email": "JohnnyGuitar@Email.com",
      "password": "password",
      "role": "Air Guitar Instructor",
      "companyname": "test company",
    }

	}

  return (
    <div className="register">
      <h1>Register</h1>

      {/* {result && <Alerts content={result} style="danger" />}
      {errMsg && <Alerts content={errMsg} style="danger" />} */}
      {result && <Alert color="danger"> {result} </Alert>}
      {errMsg && <Alert color="danger"> {errMsg} </Alert>}

      <Form id="register" onSubmit={handleSubmit} >
        {/* UserName */}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>UserName: </InputGroupText>
            </InputGroupAddon>
            <Input type="text" name="username" value={username} 
              placeholder="Username" autoComplete="username" 
              onChange={(e) => setUserName(e.target.value)} />
          </InputGroup>

        {/* Email */}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Email: </InputGroupText>
            </InputGroupAddon>
            <Input type="email" name="email" value={email} 
              placeholder="email@address.com" autoComplete="email" 
              onChange={(e) => setEmail(e.target.value)} />
          </InputGroup>

        {/* Password */}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Password: </InputGroupText>
            </InputGroupAddon>
            <Input type="password" name="newPassword" value={newPassword} 
              placeholder="Password" autoComplete="new-password" 
              onChange={(e) => setNewPassword(e.target.value)} />
          </InputGroup>

        {/* Check Password */}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Password: </InputGroupText>
            </InputGroupAddon>
            <Input type="password" name="checkNewPassword" value={checkNewPassword} 
              placeholder="Check Password" autoComplete="new-password" 
              onChange={(e) => setCheckNewPassword(e.target.value)} />
          </InputGroup>

        {/* Role */}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Role: </InputGroupText>
            </InputGroupAddon>
            <Input type="text" name="role"
              value={role} 
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)} />
          </InputGroup>

        {/* Company Name */}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Role: </InputGroupText>
            </InputGroupAddon>
            <Input type="text" name="companyname"
              value={companyname} 
              placeholder="Company Name"
              onChange={(e) => setCompany(e.target.value)} />
          </InputGroup>

        <br />
        {props.isLoading
            ? <p>Registration in process...</p>
            : <Button type="submit" disabled={isLoading} block={true}>Register</Button>}
      </Form>

    </div>
  )
}

// export default withRouter(React.memo(Register))
export default React.memo(Register)

