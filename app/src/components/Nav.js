import React from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
// import components
import Data from './Data'

class Nav extends React.Component {

  callLogout = () => {
    localStorage.removeItem('token')
    this.props.history.push('/login')
    console.log("should Logout")
  }

  render() {
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

        <Data />
      </div>
    )
  }
}

export default withRouter((Nav))