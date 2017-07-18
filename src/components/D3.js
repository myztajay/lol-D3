import React, { Component } from 'react';
import Spinner from './common/Spinner'

class D3 extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: props.match.params.user,
      data: '',
      loading:true
    }
  }
  
  render(props){
    return(
      <div>
        <h1>D3</h1>
        <h1>{this.state.username}</h1>
        <Spinner />
      </div>
    )
  }
} 

export default D3;