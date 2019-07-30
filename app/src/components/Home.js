import React from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
// import components
import { Login, Alerts } from './'

function Home() {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <p>After a user logs</p>

    </div>
  )
}

export default withRouter(Home)