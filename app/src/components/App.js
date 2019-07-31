import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
// import CSS component 
import CSS from '../css/'
// import components
import { Home, Nav, PrivateRoute, Login, Register, Alerts } from './'

export default function App() {
  // Declare a new state variable
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => { setErrMsg(null) }, [])

  return (
      <div className="App">
        <CSS />

        {errMsg && <Alerts content={errMsg} style="warning" />}

        <PrivateRoute path="/" component={Nav} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
  )
}