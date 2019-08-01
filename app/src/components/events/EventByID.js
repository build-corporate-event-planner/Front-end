import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Task from './Task'

export default function(props) {
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
  const [isLoading, setIsLoading] = useState(true)
  const id = props.match.params.id;

  // Find a Single Event by ID
  useEffect(() => {
    const eventByID = props.events.find(i => String(i.eventid) === id)
    setEvent(eventByID)
    setIsLoading(false)
  }, [])

	if (props.isLoading) {
    // return something here to indicate that you are fetching data
    console.log(event)
		return <div>Loading ... </div>;
	}

  console.log(event)
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
            console.log(task)
            return ( <Task key={task.taskid} task={task} /> )})}
      </div>

		</div>
	)
}
// tasklist: [ // tasks ...
//   ],
// userList: [ // list of objects each with a user object nested inside at key "user"
//   {
//     user: { // User object
//     }
//   }
// ]