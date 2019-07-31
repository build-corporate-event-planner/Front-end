import React from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// import components
import { Home, Login, Alerts, Events } from './'

// import actions
import { getData, logout } from '../actions/';

class Nav extends React.Component {
	constructor() {
		super()
		this.state = {
			errMsg: ''
		}
	}

	componentDidMount() {
    console.log('Component DID MOUNT!')
    // call our action
    this.props.getData()
  }

  logout = () => {
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  checkForError = (error) =>  {
    console.log(error.message)
    if (error.message.includes("status code 401")) {
      this.logout()
    }
  }

  render() {
    const { events } = this.props
    const errMsg = this.state.errMsg
    const errMsgData = this.props.errMsgData

    if (errMsgData) {
      // This happens if an Error message is returned from getData
      this.checkForError(errMsgData)
      return <div>
        <p>Error Happened ... </p>
        <p>{errMsgData.message} </p>
        </div>;
    }
    if (this.props.isLoading) {
      // indicate component is fetching data
      return <div>Loading ... </div>;
    }
    return (
      <div className="main">
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/new-event">New Event</NavLink>
            <button type="button" onClick={this.logout}>Logout</button>
          </nav>
        </header>

        {errMsg && <p className="error">{errMsg}</p>}
        
        <Route exact path="/" component={Home} />
        <Route exact path="/events" exact render={props => <Events {...props} events={events} />} />
        <Route exact path="/new-event" component={Home} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  events: state.dataReducer.data,
  // eventByID: state.dataReducer.dataByID,
	isDataLoading: state.dataReducer.isLoading,
	errMsgData: state.dataReducer.errMsg,
})

const mapDispatchToProps = { getData, logout };

export default React.memo(withRouter(
	connect( mapStateToProps, mapDispatchToProps )(Nav))
)