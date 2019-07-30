import React from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions'
// import components
import { Home, Login, Alerts } from './'

class Nav extends React.Component {

  logout = (evt) => {
    evt.preventDefault()

    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  render() {
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

        
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Home} />
        <Route exact path="/new-event" component={Home} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	errMsg: state.errMsg,
})

export default withRouter(
	connect(
		mapStateToProps,
		{ logout },
	)(Nav)
)