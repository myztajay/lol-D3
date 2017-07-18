import React, { Component } from 'react';


class D3 extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: props.match.params.user,
      loading:true
    }
  }
  render(props){
    return(
      <div>
        <h1>D3</h1>
        <h1>{this.state.username}</h1>
      </div>
    )
  }
} 


export default D3;