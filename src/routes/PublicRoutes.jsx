/**
 * PublicRoute
 * @module 🔗:src/routes/PublicRoute.js
 *
 * @author Hamza Hussain <hamza.xeros@gmail.com>
 * @copyright Hamza Hussain 2022
 * @version 0.2.0
 * @description Public Route
 *
 */

import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import { platform } from "../utils"
import { Home } from "./../pages"

const PublicMobileRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Redirect to={"/"}/>
    </Switch>
  )
}
const PublicDesktopRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      
      <Redirect to={"/"}/>
    </Switch>
  )
}

const PublicRoutes = () => {
  return platform.isMobile ? <PublicMobileRoutes/> : <PublicDesktopRoutes/>
}
export default PublicRoutes;
