import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Secret from './pages/Secret'
import Login from './pages/Login'
import Signup from './pages/Signup'

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/secret" component={Secret} />
      </Switch>
    </div>
  )
}
