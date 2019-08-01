import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

class AddEvent extends React.Component {
  constructor() {
    super()
    this.state = {
      event: { 
        eventid: 0,
        name: "",
        description: "",
        date: "",
        budget: "",
        companyname: "",
        tasklist: [ ], // tasks are objects
        userList: [ { user: {} } ] // list of objects each with a user object nested inside at key "user"
      },
    }
  }

  handleChange = e => {
    this.setState({
      event: {
        ...this.state.event,
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    // invoke form submit
    this.props.addnewfriend(this.state.friend);
    this.setState({
      friend: {
        name: "",
        age: null,
        email: ""
      }
    })
  };

  render() {
    // const { page, errMsg, shouldLogout } = this.state
    // const { eventData, isDataLoading, errMsgData } = this.props

    if (this.props.isDataLoading) {
      // fetching data
      return <div>Loading ... </div>;
    }

    return (
      <div className="new">
        <form onSubmit={this.handleSubmit}>
          <label for="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            onChange={this.handleChange}
            value={this.state.event.name}
          /> <br />

          <label for="date">Date: </label>
          <input
            type="date"
            name="date"
            placeholder="Date..."
            onChange={this.handleChange}
            value={this.state.event.date}
          /> <br />

          <label for="description">Description: </label>
          <input
            type="text"
            name="description"
            placeholder="Description..."
            onChange={this.handleChange}
            value={this.state.event.description}
          /> <br />

          <label for="budget">Budget: </label>
          <input
            type="text"
            name="budget"
            placeholder="Budget..."
            onChange={this.handleChange}
            value={this.state.event.budget}
          /> <br />

          <label for="companyname">Company Name: </label>
          <input
            type="text"
            name="companyname"
            placeholder="Company Name..."
            onChange={this.handleChange}
            value={this.state.event.companyname}
          /> <br />
          
          <button type="submit">
            Add Event
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  eventData: state.dataReducer.data,
	isDataLoading: state.dataReducer.isLoading,
	errMsgData: state.dataReducer.errMsg,
})

const mapDispatchToProps = {  };

export default withRouter(
	connect( mapStateToProps, mapDispatchToProps )(AddEvent))