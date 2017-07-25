import React from 'react'
import { Navbar, NavItem } from 'react-materialize';


const GraphNavbar = (props) =>{
  return(
    <Navbar className='blue darken-4'brand='logo' left>
	   <NavItem href=''>Getting started</NavItem>
	    <NavItem href=''>Components</NavItem>
    </Navbar>
  )
}

export default GraphNavbar;