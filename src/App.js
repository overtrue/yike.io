import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from '~/components/Nav'
import Home from './pages/home'
import './styles/app.scss'

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App
