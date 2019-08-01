import React from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
// import components
import { Home, Login, Alerts, Data, Events, Event, EventByID, AddEvent } from './'

class Nav extends React.Component {
	constructor() {
		super()
		this.state = {
      errMsg: '', 
      shouldLogout: false
		}
	}

  callLogout = () => {
    localStorage.removeItem('token')
    // this.props.history.push('/login')
    console.log("should Logout")
    this.setState({ shouldLogout: true })
  }

  render() {

    if (this.state.shouldLogout) {
      // indicate component is fetching data
      this.setState({ shouldLogout: false })
      return <div>Should Log Out </div>;
    }

    return (
      <div className="main">
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/new-event">New Event</NavLink>
            <button type="button" onClick={this.callLogout}>Logout</button>
          </nav>
        </header>
        
        <Route exact path="/" component={Home} />
        {/* <Route path="/events" exact render={props => <Data {...props} callLogout={this.callLogout} />} /> */}
        <Route exact path="/events" exact render={props => <Events {...props} callLogout={this.callLogout} />} />
        <Route exact path="/events/:id" render={props => <EventByID {...props} />} />
        <Route exact path="/new-event"  render={props => <AddEvent {...props} />} />
      </div>
    )
  }
}

export default withRouter((Nav))