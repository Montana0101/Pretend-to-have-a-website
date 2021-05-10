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

const BaseRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          {/* <Route path="/detail">
            <App content={<Detail />} />
          </Route>
          <Route path="/resumer">
            <App content={<Resumer />} />
          </Route>
          <Route path="/project">
            <App content={<Project />} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
          </Route>
          <Route path="/directory">
            <App content={<Directory />} />
          </Route>
          <Route path="/append">
            <App content={<Append />} />
          </Route> */}
          <Route path="/park/detail" component={ParkDetail}/>
          <Route path="/park">
            <Park />
          </Route>
      
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}


export { BaseRouter }