import React from 'react'
import { Route, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// import actions
import { getData, logout } from '../../actions/';

class Events extends React.Component {

	componentDidMount() {
    // GET the Data
    this.props.getData()
  }

  render() {
    const { eventData, isDataLoading, errMsgData } = this.props

    if (isDataLoading) {
      // indicate component is fetching data
      return <div>Loading ... </div>;
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
              ? <button type="button" onClick={this.props.callLogout}>Logout</button>
              : ''}
        </div>
      )
    }

    return (
			<div className="cards">
				<h2>Events</h2>
				{eventData.map((event) => (
					<Link key={event.eventid} to={`/events/${event.eventid}`} className="card">
						<p>{event.name}</p>
					</Link>
				))}
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
	connect( mapStateToProps, mapDispatchToProps )(Events))