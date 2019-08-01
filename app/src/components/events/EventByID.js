import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Task from './Task'
import User from './User'
// import actions for Hooks
import { GetDataHooks, getEventByID } from './http'

// import some Base Input
import { baseInput } from '../../baseInput'
const baseUrl = baseInput.baseUrl

function EventByID(props) {
  // Set Hooks state
  const [eventByID, setEvent] = useState({ 
    eventid: 0,
    name: "",
    description: "",
    date: "",
    budget: "",
    companyname: "",
    tasklist: [ ], // tasks are objects
    userList: [ ] // list of objects each with a user object nested inside at key "user"
  })

  const id = props.match.params.id;

  const [isLoading, errMsg, fetchedData] = getEventByID(baseUrl, [])

	if (isLoading) {
    // fetching data
		return <div>Loading ... </div>;
  }
  
  if (fetchedData) {
    const event = fetchedData.find(i => String(i.eventid) === id)
    
    return (
      <div className="card">
        <h3>{event.name}</h3>

        <div className='date'>{event.date}</div>

        <div className='description'>
          <h5>Description</h5>
          <p>{event.description}</p>
        </div>

        <div className='budget'>
          <h5>Budget</h5>
          <p>{event.budget}</p>
        </div>

        <div className='companyname'>
          <h5>Company Name</h5>
          <p>{event.companyname}</p>
        </div>

        <div className='tasklist'>
          <h5>Tasklist</h5>
            {(event.tasklist) 
            ? event.tasklist.map((x) => {
              return ( <Task key={x.taskid} task={x} /> )})
            : 'No Tasks'
            }
        </div>

        <div className='userList'>
          <h5>User List</h5>
            {(event.userList) 
            ? event.userList.map((x) => {
              return ( <User key={x} user={x} /> )})
            : 'No User List'
            }
        </div>

      </div>
    )
  }

  return <div>App is Loading ... </div>;
}
export default EventByID