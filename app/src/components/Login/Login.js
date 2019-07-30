import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions'
import { Button, Form, FormGroup, Input } from "reactstrap";

class Login extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: ''
		}
	}

	componentDidMount() {
		console.log(localStorage.getItem('token'))
		const checkToken = localStorage.getItem('token')

		if (checkToken) {
			this.props.history.push("/")
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

		console.log("Logging in")
		this.props.login(username, password)

		console.log("HandleSubmit")
		
		
			// .then(() => {
			// 	// this.props.history.push("/")
			// })
			// .catch((err) => {
			// 	console.error(err)
			// })
	}

	render() {
		const { username, password, checkToken } = this.state
    const { isLoading, errMsg } = this.props
    
    // if token then redirect ...
    if (checkToken) { this.props.history.push("/") }

		return (
			<div className="Login">
			  <h1>Login</h1>
		
			  {errMsg && <div className="alert alert-danger" role="alert"> {errMsg} </div> }
		
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
			  Username: LambdaTestUser <br />
			  Password: pass</p>
		
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	errMsg: state.errMsg,
})

const mapDispatchToProps = { login }

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Login)
)