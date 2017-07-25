import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../styles/App.css'
import Landing from './Landing'
import About from './About'
import GraphDisplay from './GraphDisplay'


class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/:user" component={GraphDisplay}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App