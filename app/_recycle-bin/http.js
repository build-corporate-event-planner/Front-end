import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = `https://corporate-event-planner.herokuapp.com`

export const useHttpLogin = (username, password, validation) => {

  // initial State  
  const [isLoading, setIsLoading] = useState(false)
  // const [fetchedData, setFetchedData] = useState(null)
  const [errMsg, setErrMsg] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    console.log("useHttpLogin useEffect")

    // check validation
    if (validation && username && password) {
      console.log("Username: " + username)
      console.log("Password: " + password)
      console.log("running axios")

      const BASE_URL = `https://corporate-event-planner.herokuapp.com`
      const body = `grant_type=password&username=${username}&password=${password}`

      axios.post(`${BASE_URL}/oauth/token`, body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${window.btoa("lambda-client:lambda-secret")}`
        }
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })

      // axios.post('/oauth/token', { username, password })
      //   
      //     
      //     // localStorage.setItem('token', res.data.payload)
      //     setIsLoading(false)
      //     setErrMsg(null)
      //   })
      //   
      //     
      //     setErrMsg(err)
      //   
    }
  }, [] )

  return [isLoading, errMsg]
}

export const useHttpRegister = (user, validation) => {

  // initial State  
  const [isLoading, setIsLoading] = useState(false)
  const [errMsg, setErrMsg] = useState(null)
  const [resultSuccess, setResultSuccess] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    console.log(validation)

    // check validation
    if (validation[0] && user.username && user.email) {
      console.log("running axios")

      axios.post(`${BASE_URL}/signup`, user)
        .then((res) => {
          console.log(res)
          console.log("Success")
          setResultSuccess(true)
          setErrMsg(null)          
        })
        .catch((err) => {
          console.log(err.response.data)
          const errResult = err.response.data.message

          // Check if Empty
          if (!errResult) { 
            setErrMsg("No Result for Error.") 
          } else {
            // Set Error Message
            setErrMsg(err.response.data.status + ": " + errResult)

            if (errResult.includes("could not execute statement")) {
              setErrMsg("could not execute statement")

              // Check the Error
              if (errResult.includes("ConstraintViolationException")) {
                setErrMsg("Constraint Violation Exception")

                // Check which value is causing error
                if (errResult.includes("PUBLIC.USER(EMAIL)")) {
                  setErrMsg("Email already registered.")
                }
                if (errResult.includes("PUBLIC.USER(USERNAME)")) {
                  setErrMsg("Username already registered.")
                }
              }
            }
          }
        })
    } else {
      console.log("Invalid User entered.")
    }
  }, [])

  return [errMsg, resultSuccess]
}