import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './common/Spinner';


class D3 extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: props.match.params.user,
      userId: '',
      apiData: '',
      loading:true
    }
  }
  
  componentDidMount(){
    axios.get(`http://localhost:3030/api/${this.state.username}`)
    .then((response)=>{
      console.log(response.data)
      this.setState({userId: response.data.id, loading: false})
    }) 
    // axios.get(`http://localhost:3030/api/${this.state.userId}/matches`)
    // .then((response)=>{
    //   console.log(response)
    //   // this.setState({userid: response.data.id, loading: false})
    // })
  }
  
  render(props){
    return(
      <div>
        <h1>D3</h1>
        <h1>{this.state.username}</h1>
        <h4>{this.state.apiData.id}</h4>
        
        <Spinner />
      </div>
    )
  }
} 

export default D3;