import React from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// import components
import { Home, Login, Alerts } from './'

// import actions
import { getData, logout } from '../actions/';

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }

	componentDidMount() {
    // call our action
		this.props.getData();
  }

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
  baseUrl: state.dataReducer.baseUrl,
  events: state.dataReducer.data,
  // eventByID: state.dataReducer.dataByID,
	isDataLoading: state.dataReducer.isLoading,
	errMsgData: state.dataReducer.errMsg,
})

const mapDispatchToProps = { getData, logout };

export default withRouter(
	connect( mapStateToProps, mapDispatchToProps )(Nav)
)