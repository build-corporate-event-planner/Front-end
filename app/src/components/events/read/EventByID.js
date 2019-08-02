import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Task, User, Update, Delete } from '../..'
// import actions for Hooks
import { useReadData } from '../Data'

// import some Base Input
import { baseInput } from '../../../baseInput'
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
  const [updateEvent, setUpdateEvent] = useState(false)
  const [deleteEvent, setDeleteEvent] = useState(false)

  const id = props.match.params.id;

  const [isLoading, errMsg, fetchedData] = useReadData(baseUrl, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    return <Redirect to='/login' />
  }

  const handleChange = e => {
    setEvent({
        ...eventByID,
        [e.target.name]: e.target.value
    });
  }
  
	if (isLoading) {
    // fetching data
		return <div>Loading ... </div>;
  }

  if (errMsg) {
    // This happens if an Error message is returned from GetData
    console.log(errMsg)
    return (
      <div className="alert alert-danger" role="alert">
        <p>Error Happened ... </p>
        <p>{errMsg.message} </p>
          {/* If Error is Status 401, offer Logout Button. */}
          {(errMsg.message.includes("status code 401"))
            ? <button type="button" onClick={handleLogout}>Logout</button>
            : ''}
      </div>
    )
  }

	if (updateEvent) {
    // fetching data
		return <Update event={fetchedData} /> ;
  }

	if (deleteEvent) {
    // fetching data
		return <Delete event={fetchedData} /> ;
  }
  
  if (fetchedData) {
    const event = fetchedData.find(i => String(i.eventid) === id)
    
    return (
      <div className="card">
        <h3>{event.name}</h3>

        <div className='edit'><button type="button" onClick={() => {setUpdateEvent(true)}}>Edit</button></div>
        <div className='delete'><button type="button" onClick={() => {setDeleteEvent(true)}}>Delete</button></div> 

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
            ? event.tasklist.map((x, i) => {
              return ( <Task key={i} task={x} /> )})
            : 'No Tasks'
            }
        </div>

        <div className='userList'>
          <h5>User List</h5>
            {(event.userList) 
            ? event.userList.map((x, i) => {
              return ( <User key={i} user={x} /> )})
            : 'No User List'
            }
        </div>

      </div>
    )
  }

  return <div>App is Loading ... </div>;
}
export default EventByID