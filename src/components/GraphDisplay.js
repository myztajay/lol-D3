import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './common/Spinner';
import Graph from './common/Graph';
import '../styles/GraphDisplay.css'


class GraphDisplay extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: props.match.params.user,
      matches: [],
      userId: '',
      loading:true
    }
  }
  
  componentDidMount(){
    axios.get(`http://localhost:3030/api/${this.state.username}`)
    .then((response)=>{
      console.log(response.data)
      this.setState({
        userId: response.data.userId, 
        matches: response.data.userMatches, 
        loading: false})
    }) 
  }
  
  render(props){
    if(this.state.loading){
      return(  
        <Spinner />
      )
    }
    else {
    return(
      <div className='graphDisplay'>
        <h1>D3</h1>
        <h1>{this.state.username}</h1>
        <Graph matches={this.state.matches} />
      </div>
    )
  }
  }
} 

export default GraphDisplay;