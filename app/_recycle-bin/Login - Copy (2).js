import React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Input } from "reactstrap";

function Login(props) {
	return (
		<div className="Login">
      <h1>Login</h1>

      {errMsg &&  <div className="alert alert-danger" role="alert"> {errMsg} </div> }

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
		</div>
	)
}

export default Login