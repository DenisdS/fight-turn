import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Game from '../components/pages/game/game'
import About from '../components/pages/about/about'

const routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={About} />
      <Route path='/about' component={About} />
      <Route path='/game' component={Game} />
    </Switch>
  )
}

export default routes;
