import React from 'react'
import { Radar } from 'react-chartjs-2'

const RadarGraph = (props) => {

  return(
    <Radar
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
          ]  
        }]
      }} 
      options={{ maintainAspectRatio: false}}
    />
  ) 
}

export default RadarGraph