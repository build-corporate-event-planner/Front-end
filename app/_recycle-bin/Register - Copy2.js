import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Alert, Button, Form, InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import { register } from '../../actions'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {
        username: '',
        password: '',
        email: '', 
        role: '', 
        companyname: ''
      }, 
      checkToken: ''
    }
  } 

	handleChange = (evt) => {
		evt.preventDefault()

		this.setState({
			[evt.target.name]: evt.target.value,
		})
	}

  // Declare the login state variables
  // const [user, setUser] = useState( {
  //   // username and email must be unique
  //   "username": "User",
  //   "email": "test@email.com",
  //   "password": "hunter",
  //   "role": "Role",
  //   "companyname": "Company"
  // } )

  // const result = "" //useHttpRegister(user, [isValid])
  // console.log(result)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
    
    // Check for undefined or empty input fields
    // if (!username || !email || !newPassword || !checkNewPassword ) {
    //   setErrMsg("Please enter a valid Username, Email, and password combination.")
    // }
    
    // // Check if passwords match
    // if ( !(newPassword == checkNewPassword) ) {
    //   setErrMsg("Please verify Password.")
    // }

  //   if (!errMsg) {
  //     setUser({
  //       "username": username,
  //       "email": email,
  //       "password": newPassword,
  //       "role": role,
  //       "companyname": companyname
  //     })

  //     console.log(user)
  //     // props.history.push("/")
  //   }

  //   if (result[0]) { setErrMsg(result[0])}
  //   if (result[1]) {
  //     setTimeout(function() { 
  //       props.history.push("/")
  //     }, 1000);
  //   }
  // }

	render() {
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
                onChange={this.handleChange} />
            </InputGroup>

          {/* Email */}
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Email: </InputGroupText>
              </InputGroupAddon>
              <Input type="email" name="email" value={email} 
                placeholder="email@address.com" autoComplete="email" 
                onChange={this.handleChange} />
            </InputGroup>

          {/* Password */}
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Password: </InputGroupText>
              </InputGroupAddon>
              <Input type="password" name="newPassword" value={newPassword} 
                placeholder="Password" autoComplete="new-password" 
                onChange={this.handleChange} />
            </InputGroup>

          {/* Check Password */}
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Password: </InputGroupText>
              </InputGroupAddon>
              <Input type="password" name="checkNewPassword" value={checkNewPassword} 
                placeholder="Check Password" autoComplete="new-password" 
                onChange={this.handleChange} />
            </InputGroup>

          {/* Role */}
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Role: </InputGroupText>
              </InputGroupAddon>
              <Input type="text" name="role"
                value={role} 
                placeholder="Role"
                onChange={this.handleChange} />
            </InputGroup>

          {/* Company Name */}
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Role: </InputGroupText>
              </InputGroupAddon>
              <Input type="text" name="companyname"
                value={companyname} 
                placeholder="Company Name"
                onChange={this.handleChange} />
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
}

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	errMsg: state.errMsg,
})

const mapDispatchToProps = { register }

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Register)
)

