import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
// import App from '/src/pages/app'

import Home from '/src/pages/home'
import Park from '/src/pages/park'
import ParkDetail from '/src/pages/park/detail.js'
import Month from '/src/pages/month'

const BaseRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/park/detail" component={ParkDetail}/>
          <Route path="/park" component={Park}/>
          
          <Route path='/month' component={Month}/>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}


export { BaseRouter }