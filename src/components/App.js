import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../styles/App.css'
import Landing from './Landing'
import About from './About'
import D3 from './D3'


class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <h1>Main</h1>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/:user" component={D3}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App