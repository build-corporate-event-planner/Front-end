import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Alert, Button, Form, InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import { login, register } from '../../actions'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {
        username: '',
        password: '',
        checkPassword: '',
        email: '', 
        role: '', 
        companyname: ''
      }, 
      checkPassword: '',
      checkToken: '',
      isSuccess: false,
      errMessage: '',
    }
  } 

	handleChange = (evt) => {
    evt.preventDefault()

		this.setState({ 
      user: {
        ...this.state.user, 
        [evt.target.name]: evt.target.value,
      }
		})
  }

  handleCheckPassword = (evt) => {
    evt.preventDefault()

		this.setState({
      [evt.target.name]: evt.target.value,
		})
	}

	handleSubmit = (evt) => {
		evt.preventDefault()
    const user = this.state.user
    //const { username, email, password, checkPassword, role, companyname } = this.state.user
    
    // if (!(password == checkPassword)) {
    //   console.log (password)
    //   console.log (checkPassword)
    //   this.setState({ 
    //     errMessage: 'Passwords must match.'
    //   })
    // } else 
    // if ( !username || !email || !password ) {
    //   this.setState({ 
    //     errMessage: 'Username, Email, and password are required.'
    //   })
    // } else {    
      console.log(user)
      const response = this.props.register(user)

      if (this.props.isSuccess) {
        this.props.history.push("/login")
      }
    //}
	}

	render() {
    const { username, email, password, checkPassword, role, companyname } = this.state.user
    const { errMessage } = this.state
    const { isLoading, errMsg, errMsgLogin } = this.props
    
    return (
      <div className="register">
        <h1>Register</h1>
        
        { errMessage && <div className="alert alert-danger" role="alert"> {errMessage} </div> }
        { errMsg && <div className="alert alert-danger" role="alert"> {errMsg} </div> }
        { errMsgLogin && <div className="alert alert-warning" role="alert"> {errMsgLogin} </div> }

        <Form id="register" onSubmit={this.handleSubmit} >
          {/* UserName */}
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>UserName: </InputGroupText>
              </InputGroupAddon>
              <Input type="text" name="username" value={username} 
                placeholder="Username"
                onChange={this.handleChange} />
            </InputGroup>

          {/* Email */}
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Email: </InputGroupText>
              </InputGroupAddon>
              <Input type="email" name="email" value={email} 
                placeholder="email@address.com"
                onChange={this.handleChange} />
            </InputGroup>

          {/* Password */}
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Password: </InputGroupText>
              </InputGroupAddon>
              <Input type="password" name="password" value={password} 
                placeholder="Password" 
                onChange={this.handleChange} />
            </InputGroup>

          {/* Check Password */}
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Password: </InputGroupText>
              </InputGroupAddon>
              <Input type="password" name="checkPassword" value={checkPassword} 
                placeholder="Check Password"
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
                <InputGroupText>Company: </InputGroupText>
              </InputGroupAddon>
              <Input type="text" name="companyname"
                value={companyname} 
                placeholder="Company Name"
                onChange={this.handleChange} />
            </InputGroup>

          <br />
          {isLoading
              ? <p>Registration in process...</p>
              : <Button type="submit" disabled={isLoading} block={true}>Register</Button>}
        </Form>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.registerReducer.isLoading,
  isSuccess: state.registerReducer.isSuccess,
	errMsg: state.registerReducer.errMsg,
  isLoginLoading: state.loginReducer.isLoading,
  isLoginSuccess: state.loginReducer.isSuccess,
	errMsgLogin: state.loginReducer.errMsg,
})

const mapDispatchToProps = { register }

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Register)
)

