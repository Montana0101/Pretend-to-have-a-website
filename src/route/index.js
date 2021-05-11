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

// 月租地图
import Month from '/src/pages/month'
import MonthDetail from '/src/pages/month/detail'
import MonthStop from '/src/pages/month/stop'
import MonthRent from '/src/pages/month/rent'
import MonthSearch from '/src/pages/month/search'

// 出租车位
import Rent from '/src/pages/rent'
import RentDetail from '/src/pages/rent/detail'

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
          <Route path='/month/rent' component={MonthRent}/>
          <Route path='/month/search' component={MonthSearch}/>

          {/* 出租车位 */}
          <Route path='/rent' exact component={Rent}/>
          <Route path='/rent/detail' component={RentDetail}/>

          <Route path="/" component={Home}/>
        </Switch>
      </>
    </Router>
  )
}


export { BaseRouter }