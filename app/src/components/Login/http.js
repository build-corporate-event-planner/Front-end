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
      });

      // axios.post('/oauth/token', { username, password })
      //   .then((res) => {
      //     console.log(res)
      //     // localStorage.setItem('token', res.data.payload)
      //     setIsLoading(false)
      //     setErrMsg(null)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //     setErrMsg(err)
      //   })
    }
  }, validation )

  return [isLoading, errMsg]
}

export const useHttpRegister = (user, validation) => {

  // initial State  
  const [isLoading, setIsLoading] = useState(false)
  // const [fetchedData, setFetchedData] = useState(null)
  const [errMsg, setErrMsg] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    console.log("useHttpRegister useEffect")

    // check validation
    if (validation && user) {
      console.log(user)
      console.log("running axios")

      axios.post(`${BASE_URL}/signup`, user)
        .then((res) => {
          console.log(res)
          setIsLoading(false)
          setErrMsg(null)
        })
        .catch((err) => {
          console.log(err.response.data.message)
          setErrMsg(err.response.data.message)
          return errMsg
        })
    }
  }, validation )

  return [isLoading, errMsg]
}