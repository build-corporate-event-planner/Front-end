import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
// import components
import { Home, PrivateRoute, Login, Alerts } from './'

export default function App() {
  // Declare a new state variable
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => { setErrMsg(null) }, [])

  return (
      <div className="App">

        {errMsg && <Alerts content={errMsg} style="warning" />}

        <PrivateRoute path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
  )
}