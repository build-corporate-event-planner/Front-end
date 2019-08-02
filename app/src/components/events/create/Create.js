import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Alert, Button, Form, InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
// import actions for Hooks
import { useCreateData, useHandleError } from '../Data'

// import some Base Input
import { baseInput, handleError } from '../../../baseInput'
const baseUrl = baseInput.baseUrl

function Create(props) {

  const body = props.event
  console.log(body)

  // import hook function to add data
  const [isLoading, errMsg, fetchedData] = useCreateData(baseUrl, body, [body])

  // Create Data should return an event id, until I can find out how ...
  const eventid = 9

	if (isLoading) {
    // fetching data
		return <div>Loading ... </div>;
  }

  const handleErrorResult = handleError(errMsg)

  if (errMsg) {
    // This happens if an Error message is returned
    const handleErrorResult = handleError(errMsg)

    return (
      <div id="loginError" className="alert alert-danger" role="alert"> 
        {handleErrorResult.map((x, i) => ( 
          <p key={i} >{x}</p>
        ))}
      </div> 
    )
  }
  const { name, date, description, budget, companyname } = props.event

  return (
    <div className="creating">
      <h1>Event Created</h1>

      <h3>{name}</h3>

      <div className='edit'><Link to={`/edit/${eventid}`}>Edit</Link></div>

      <div className='date'>{date}</div>

      <div className='description'>
        <h5>Description</h5>
        <p>{description}</p>
      </div>

      <div className='budget'>
        <h5>Budget</h5>
        <p>{budget}</p>
      </div>

      <div className='companyname'>
        <h5>Company Name</h5>
        <p>{companyname}</p>
      </div>

      {(handleErrorResult)
      ? <div id="loginError" className="alert alert-danger" role="alert"> 
          {handleErrorResult.map((x, i) => ( 
          <p key={i} >{x}</p>
          ))}
        </div>
      : ''
      }

    </div>
  )
}
export default Create