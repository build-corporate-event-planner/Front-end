import React, { useState, useEffect } from 'react'

function Delete(props) {
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
  const [deleteEvent, setDeleteEvent] = useState(false)
  const [DonotDeleteEvent, setDonotDeleteEvent] = useState(false)

  const id = props.match.params.id;

  const [isLoading, errMsg, fetchedData] = useDeleteData(id, deleteEvent, [deleteEvent])

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

  return (
    <div className="delete">
      <h3>{event.name}</h3>
      <p>Are you sure you want to delete, {event.name}?</p>

      <div>
        <button type="button" onClick={() => {setDeleteEvent(true)}}>Yes</button>
        <button type="button" onClick={() => {setDonotDeleteEvent(true)}}>No</button>
      </div> 
    </div>
  )
}

export default Delete
