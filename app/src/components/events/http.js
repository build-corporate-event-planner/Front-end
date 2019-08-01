import { useState, useEffect } from 'react'
import axios from 'axios'

export const GetDataHooks = (url, dependencies) => {

  // initial State  
  const [isLoading, setIsLoading] = useState(false)
  const [fetchedData, setFetchedData] = useState(null)
  const [errMsg, setErrMsg] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }

    axios.get(`${url}/events/all`, { headers })
    .then((res) => {
      setIsLoading(false)
      setErrMsg(null)
      setFetchedData(res.data)
      console.log(fetchedData)
    })
    .catch((err) => {
      setIsLoading(false)
      setErrMsg(err)
      console.log(errMsg)
    })
  }, [] )

  return [isLoading, errMsg, fetchedData]
}