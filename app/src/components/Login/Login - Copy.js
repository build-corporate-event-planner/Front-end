import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions'
import { Button, Form, FormGroup, Input } from "reactstrap";

class Login extends React.Component {
	constructor() {
		super()
		this.state = {
			username: 'LambdaTestUser',
			password: 'pass',
			errorMessage: ''
		}
		this.baseState = this.state 
	}

	componentDidMount() {
		const err = this.props.errMsgLogin
		console.log(err)
		if (err) {
			const errorMessage = ['Error occured: ']
			if (err.status) {
				errorMessage.push(`Status: ${err.status} ${err.statusText}`)
			}
			if (err.data) {
				if (err.data.error) {
					errorMessage.push(`Error: ${err.data.error}`)
				}
				if (err.data.error_description) {
					errorMessage.push(`Description: ${err.data.error_description}`)
				}
			}
			if (err.config.url) {
				errorMessage.push(`URL: ${err.config.url}`)
			}
			if (err.config.data) {
				errorMessage.push(`with ${err.config.data}`)
			}
			console.log(errorMessage)
			this.setState({ errorMessage: errorMessage })
		}
	}

	handleChange = (evt) => {
		evt.preventDefault()

		this.setState({
			[evt.target.name]: evt.target.value,
		})
	}

	handleSubmit = (evt) => {
		evt.preventDefault()
		const { username, password } = this.state
		this.props.login(username, password)
	}

	callReset = () => {
		// this.props.history.push('/login')
		this.setState(this.baseState)
	}

	handleError = (err) => {
		const errorMessage = ['Error occured: ']
		if (err.data) {
			if (err.status) {
				errorMessage.push(`Status: ${err.status} ${err.statusText}`)
			}
			if (err.data.error) {
				errorMessage.push(`Error: ${err.data.error}`)
			}
			if (err.data.error_description) {
				errorMessage.push(`Description: ${err.data.error_description}`)
			}
			if (err.config.url) {
				errorMessage.push(`URL: ${err.config.url}`)
			}
			if (err.config.data) {
				errorMessage.push(`with ${err.config.data}`)
			}
			
      // return ( 
			// 	<div id="loginError" className="alert alert-danger" role="alert"> 
			// 		{errorMessage.map((x) => ( 
			// 			<p>{x}</p>
			// 		))}
			// 		<button type="button" onClick={this.callLogin}>Reload</button>
			// 	</div> 
			// ); 
		}}

	render() {
		const { username, password, errorMessage } = this.state
		const { isLoading, errMsgLogin, successfulLogin } = this.props
    
    // if token then redirect ...
		if (successfulLogin) { this.props.history.push("/") }
		
    // if Error
    // if (errMsgLogin) {
		// 	// Error Occured
		// 	console.log(errMsgLogin)
		// 	this.handleError(errMsgLogin)
		// }

		return (
			<div className="Login">
			  <h1>Login</h1>
				<div id="loginError"></div>
		
				{errorMessage && <div className="alert alert-danger" role="alert"> 
						{errorMessage.map((x) => ( 
							<p>{x}</p>
						))}
						<button type="button" onClick={this.callLogin}>Reload</button>
					</div>  }
		
			  <Form onSubmit={this.handleSubmit}>
				<FormGroup>
				  <Input type="text" name="username" placeholder="Username" autoComplete="username" 
					value={username} onChange={this.handleChange} />
				</FormGroup>
				<FormGroup>
				  <Input type="password" name="password" placeholder="Password" autoComplete="current-password" 
					value={password} onChange={this.handleChange} />
				</FormGroup>
		
						{this.props.isLoading
							? <p>Logging in...</p>
							: <Button type="submit" disabled={isLoading} block={true}>Login</Button>}
			  </Form>
		
			  <Link to='/register'> Register a New User </Link>

			  <p>Sample Data <br />
			  Username: LambdaTestUser<br />
			  Password: pass</p>
		
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
  isLoading: state.loginReducer.isLoading,
  successfulLogin: state.loginReducer.successfulLogin,
	errMsgLogin: state.loginReducer.errMsg,
})

const mapDispatchToProps = { login }

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Login)
)