import React from 'react'

const Graph = (props) => {
  const top = props.matches.filter(lane => {return lane === "TOP"}).length
  const jungle = props.matches.filter(lane => {return lane === "JUNGLE"}).length
  const mid = props.matches.filter(lane => {return lane === "MID"}).length
  const bottom = props.matches.filter(lane => {return lane === "BOTTOM"}).length
  const support = props.matches.filter(lane => {return lane === "SUPPORT"}).length
  
  return(
    <div>
    <h1>{top}</h1>
    <h1>{jungle}</h1>
    </div>
  ) 
}

export default Graph