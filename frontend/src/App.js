import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Favourite from './components/Favourite'
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header/>
          <Switch>
            <Route exact path='/'>
<Main/>
            </Route>
            <Route exact path='/favourite'>
<Favourite/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
