import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './common/Spinner';
import BarGraph from './BarGraph';
import RadarGraph from './RadarGraph';
import DoughnutGraph from './DoughnutGraph'
import GraphNavbar from './GraphNavbar';
import '../styles/GraphDisplay.css';


class GraphDisplay extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: props.match.params.user,
      matches: [],
      userId: '',
      loading:true,
      graph: ''
    }
  }
  
  componentDidMount(){
    axios.get(`http://localhost:3030/api/${this.state.username}`)
    .then((response)=>{
      console.log(response.data)
      this.setState({
        userId: response.data.userId, 
        matches: response.data.userMatches, 
        graph: 'bar',
        loading: false})
    }) 
  }
  
  handleGraphChange =(e, graph) =>{
    e.preventDefault()
    this.setState({
      graph
    })
    console.log(this.state.graph)
  }

  
  render(props){
    let Component = ''
    if(this.state.loading){ Component = <Spinner /> }
    if(this.state.graph === 'bar') Component = < BarGraph matches={ this.state.matches }/>
    if(this.state.graph === 'doughnut') Component = < DoughnutGraph matches={ this.state.matches } />
    if(this.state.graph === 'radar') Component = < RadarGraph matches={ this.state.matches } />
    
    return(
      <div className='graphDisplay'>
        <GraphNavbar handleGraphChange={this.handleGraphChange}/>
        {Component}
      </div>
    )
  
  }
} 

export default GraphDisplay;