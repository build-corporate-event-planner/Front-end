import React from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
// import components
import { Home, Login, Alerts } from './'

function Nav() {
  return (
    <div className="home">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/new-event">New Event</NavLink>
          <button type="button" onClick={this.logout}>Logout</button>
        </nav>
      </header>
      
      <Route exact path="/events" component={Home} />
      <Route exact path="/new-event" component={Home} />
    </div>
  )
}

export default withRouter(Nav)