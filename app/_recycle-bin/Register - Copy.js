import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Alert, Button, Form, InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import { register } from '../../actions'
// import { Alerts } from '../'

function Register(props) {

  // Declare the login state variables
  const [user, setUser] = useState( {
    // username and email must be unique
    "username": "User",
    "email": "test@email.com",
    "password": "hunter",
    "role": "Role",
    "companyname": "Company"
  } )
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [checkNewPassword, setCheckNewPassword] = useState("")
  const [role, setRole] = useState("")
  const [companyname, setCompany] = useState("")
  
  const [isValid, setIsValid] = useState(false)
  const [errMsg, setErrMsg] = useState(null)

  const result = "" //useHttpRegister(user, [isValid])
  console.log(result)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Check for undefined or empty input fields
    // if (!username || !email || !newPassword || !checkNewPassword ) {
    //   setErrMsg("Please enter a valid Username, Email, and password combination.")
    // }
    
    // // Check if passwords match
    // if ( !(newPassword == checkNewPassword) ) {
    //   setErrMsg("Please verify Password.")
    // }

    if (!errMsg) {
      setUser({
        "username": username,
        "email": email,
        "password": newPassword,
        "role": role,
        "companyname": companyname
      })

      console.log(user)
      // props.history.push("/")
    }

    if (result[0]) { setErrMsg(result[0])}
    if (result[1]) {
      setTimeout(function() { 
        props.history.push("/")
      }, 1000);
    }
  }

  return (
    <div className="register">
      <h1>Register</h1>

      { result[0] && <div className="alert alert-danger" role="alert"> {result[0]} </div> }
      { errMsg && <div className="alert alert-danger" role="alert"> {errMsg} </div> }

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
        {/* {props.isLoading
            ? <p>Registration in process...</p>
            : <Button type="submit" disabled={isLoading} block={true}>Register</Button>} */}
        <Button type="submit" block={true}>Register</Button>
      </Form>

    </div>
  )
}

// export default withRouter(React.memo(Register))
export default React.memo(Register)

