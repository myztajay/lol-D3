import React from 'react'
import { Navbar, NavItem } from 'react-materialize';


const GraphNavbar = (props) =>{
  console.log(props)
  return(
    <Navbar className='blue darken-4'brand='logo' left>
	  <NavItem onClick={
      (e)=> {
      props.handleGraphChange(e,'bar')
    }}
    >Bar
    </NavItem>
	  <NavItem onClick={
      (e)=> {
      props.handleGraphChange(e,'doughnut')
    }}>Doughnut</NavItem>
    <NavItem onClick={
      (e)=> {
      props.handleGraphChange(e, 'radar')
    }}>Radar</NavItem>
    </Navbar>
  )
}

export default GraphNavbar;