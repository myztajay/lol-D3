import React, { Component } from 'react';
import InputBox from './common/InputBox'
import { Col, Card } from 'react-materialize'
import '../styles/Landing.css'

class Landing extends Component {
  state = {
    username: ''
  }
  
  handleUsernameChange = (event) =>{
    this.setState({username: event.target.value})
  }
  
  render(){
    return(
      <div className='landing'>
        <Col m={1} s={6} >
		       <Card className='teal lighten-5' textClassName='white-text' title='Choose Summoner Name' >
		       <InputBox handleUsernameChange={this.handleUsernameChange.bind(this)} username={this.state.username} />
		      </Card>
        </Col>
      </div>
    ) 
  }
}

export default Landing;