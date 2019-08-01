import React from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import components
import { Home, Login, Alerts, Events, Event, EventByID } from './'

// import actions
import { getData, logout } from '../actions/';

class Nav extends React.Component {
	constructor() {
		super()
		this.state = {
      page: 'Nav',
      errMsg: '', 
      shouldLogout: false
		}
	}

	componentDidMount() {
    console.log('Component DID MOUNT!')
    // call our action
    this.props.getData()
  }

  callLogout = () => {
    localStorage.removeItem('token')
    this.setState({ 
      page: 'Login',
      shouldLogout: true,
    })
    //this.props.history.push('/login')
    console.log("shouldLogout")
    console.log(this.state.shouldLogout)
  }

  checkForError = (error) =>  {
    console.log(error.message)
    if (error.message.includes("status code 401")) {
      this.callLogout()
    }
  }

  render() {
    const { page, errMsg, shouldLogout } = this.state
    const { eventData, isDataLoading, errMsgData } = this.props

    if (isDataLoading) {
      // indicate component is fetching data
      return <div>Loading ... </div>;
    }

    if (shouldLogout) {
      // indicate component is fetching data
      return <div>Should Log Out </div>;
    }

    if (errMsgData) {
      // This happens if an Error message is returned from getData
      console.log("Error")
      //this.checkForError(errMsgData)
      return (
        <div className="alert alert-danger" role="alert">
          <p>Error Happened ... </p>
          <p>{errMsgData.message} </p>
          <button type="button" onClick={this.props.getData}>Reload Page</button>
            {/* If Error is Status 401, offer Logout Button. */}
            {(errMsgData.message.includes("status code 401"))
              ? <button type="button" onClick={this.callLogout}>Logout</button>
              : ''}
        </div>
      )
    }

    return (
      <div className="main">
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/new-event">New Event</NavLink>
            <button type="button" onClick={this.callLogout}>Logout</button>
          </nav> {page}
        </header>

        {errMsg && <p className="error">{errMsg}</p>}
        
        <Route exact path="/" component={Home} />
        <Route exact path="/events" exact render={props => <Events {...props} events={eventData} />} />
        {/* <Route exact path="/events/:id" render={props => <Event {...props} events={eventData} />} /> */}
        <Route exact path="/events/:id" render={props => <EventByID {...props} events={eventData} />} />
        <Route exact path="/new-event" component={Home} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  eventData: state.dataReducer.data,
	isDataLoading: state.dataReducer.isLoading,
	errMsgData: state.dataReducer.errMsg,
})

const mapDispatchToProps = { getData, logout };

export default withRouter(
	connect( mapStateToProps, mapDispatchToProps )(Nav))