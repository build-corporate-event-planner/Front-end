import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Task from './Task'
import User from './User'
// import actions for Hooks
import { GetDataHooks } from './http'

// import some Base Input
import { baseInput } from '../../baseInput'
const baseUrl = baseInput.baseUrl
console.log(baseUrl)

function EventByID(props) {
  // Set Hooks state
  const [event, setEvent] = useState({ 
    eventid: 0,
    name: "",
    description: "",
    date: "",
    budget: "",
    companyname: "",
    tasklist: [ ], // tasks are objects
    userList: [ { user: {} } ] // list of objects each with a user object nested inside at key "user"
  })
  // const [isLoading, setIsLoading] = useState(true)
  const id = props.match.params.id;

  const [isLoading, errMsg, fetchedData] = GetDataHooks(baseUrl, [])
  console.log(fetchedData)

  // Find a Single Event by ID
  // useEffect(() => {
  //   const eventByID = props.events.find(i => String(i.eventid) === id)
  //   setEvent(eventByID)
  //   setIsLoading(false)
  // }, [])

	if (props.isLoading) {
    // fetching data
		return <div>Loading ... </div>;
	}

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
          {event.tasklist.map((task) => {
            return ( <Task key={task.taskid} task={task} /> )})}
      </div>

      <div className='userList'>
        <h5>User List</h5>
          {event.userList.map((user, i) => {
            return ( <User key={i} user={user} /> )})}
      </div>

		</div>
	)
}
export default EventByID