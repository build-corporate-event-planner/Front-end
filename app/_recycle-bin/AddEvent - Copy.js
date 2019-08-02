import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { Alert, Button, Form, InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";

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
    console.log('Handle Submit')
    // this.setState({
    //   event: {}
    // })
  };

  render() {
    // const { page, errMsg, shouldLogout } = this.state
    // const { eventData, isDataLoading, errMsgData } = this.props
    const isLoading = false
    const { name, date, description, budget, companyname } = this.state.event

    if (this.props.isDataLoading) {
      // fetching data
      return <div>Loading ... </div>;
    }

    return (
      <div className="new">
        <form onSubmit={this.handleSubmit}>
          {/* Event Name */}
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Event Name: </InputGroupText>
              </InputGroupAddon>
              <Input type="text" name="name" value={name} 
                placeholder="Name..."
                onChange={this.handleChange} />
            </InputGroup>

          {/* Date */}
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Date: </InputGroupText>
              </InputGroupAddon>
              <Input type="date" name="date" value={date} 
                placeholder="Date..."
                onChange={this.handleChange} />
            </InputGroup>

          {/* Description */}
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Description: </InputGroupText>
              </InputGroupAddon>
              <Input type="text" name="description" value={description} 
                placeholder="Description..."
                onChange={this.handleChange} />
            </InputGroup>

          {/* Budget */}
          <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Budget: </InputGroupText>
              </InputGroupAddon>
              <Input type="text" name="budget" value={budget} 
                placeholder="Budget..."
                onChange={this.handleChange} />
            </InputGroup>

          {/* Company Name */}
          <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Company Name: </InputGroupText>
              </InputGroupAddon>
              <Input type="text" name="companyname" value={companyname} 
                placeholder="Company Name..."
                onChange={this.handleChange} />
            </InputGroup>
          
          <Button type="submit" disabled={isLoading} block={true}>Add Event</Button>
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