import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutGraph = (props) => {

  return(
    <Doughnut
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
    width={50}
    height={10}
    />
  ) 
}

export default DoughnutGraph