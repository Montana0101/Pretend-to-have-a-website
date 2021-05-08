import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import App from '/src/pages/app'

import Home from '/src/pages/home'
// import Directory from '/src/pages/directory'
// import Append from '/src/pages/append'
// import { Project } from '/src/pages/project'
// import { Resumer } from '/src/pages/resumer'
// import Detail from '/src/pages/detail'

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
          <Route path="/">
            {/* <App content={<Home />} /> */}
            <Home/>
          </Route>
        </Switch>
      </>
    </Router>
  );
}


export { BaseRouter }