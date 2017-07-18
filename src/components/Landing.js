import React, { Component } from 'react';
import InputBox from './common/InputBox'

class Landing extends Component {
  state = {
    username: ''
  }
  
  handleUsernameChange = (event) =>{
    this.setState({username: event.target.value})
  }
  
  render(){
    return(
      <div>
        <h1>Landing</h1>
        <InputBox handleUsernameChange={this.handleUsernameChange.bind(this)} username={this.state.username} />
      </div>
    ) 
  }
}

export default Landing;