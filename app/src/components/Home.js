import React from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
// import components
import { Login, Alerts } from './'

function Home() {
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
      <h1>Home Page</h1>
      <p>After a user logs</p>

    </div>
  )
}

export default withRouter(Home)