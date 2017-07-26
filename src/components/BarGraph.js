import React from 'react'
import { Bar } from 'react-chartjs-2'
import '../styles/GraphDisplay.css';

const BarGraph = (props) => {

  return(
    <Bar
      data={{
        labels:['TOP', 'JUNGLE', 'MID', 'BOTTOM', 'SUPPORT'],
        datasets: [
          {
          label: 'League Lane Data',
          data:[
            props.matches.filter((lane)=>{
              return lane === 'TOP'
            }).length,
            props.matches.filter((lane)=>{
              return lane === 'JUNGLE'
            }).length,
            props.matches.filter((lane)=>{
              return lane === 'MID'
            }).length,
            props.matches.filter((lane)=>{
              return lane === 'BOTTOM'
            }).length,
            props.matches.filter((lane)=>{
              return lane === 'SUPPORT'
            }).length
          ],
          
        }]
      }} 

	    height={30}
      options={{ maintainAspectRatio: false}}
      
      // responsive={true}
    
    />
  ) 
}

export default BarGraph