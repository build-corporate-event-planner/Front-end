import { useState, useEffect } from 'react'
import axios from 'axios'
import { validateLoginForm } from "./validate";

export const useHttp = (username, password, validation) => {

  // initial State  
  const [isLoading, setIsLoading] = useState(false)
  // const [fetchedData, setFetchedData] = useState(null)
  const [errMsg, setErrMsg] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    console.log("useHTTP")
    console.log("Username: " + username)
    console.log("Password: " + password)

    // check validation
    if (validation) {
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