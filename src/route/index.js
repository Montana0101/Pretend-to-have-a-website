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
import ParkDetail from '/src/pages/park/detail'
import Month from '/src/pages/month'
import MonthDetail from '/src/pages/month/detail'
import MonthStop from '/src/pages/month/stop'

const BaseRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          {/* 停车地图 */}
          <Route path="/park" exact component={Park}/>
          <Route path="/park/detail" component={ParkDetail}/>
          
          {/* 月租专区 */}
          <Route path='/month' exact component={Month}/>
          <Route path='/month/detail' component={MonthDetail}/>
          <Route path='/month/stop' component={MonthStop}/>

          <Route path="/" component={Home}/>
        </Switch>
      </>
    </Router>
  )
}


export { BaseRouter }