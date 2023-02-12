import React from 'react'
import { Nav, NavbarContainer } from './NavbarComponents'

const Navbar = () => {
  return (
    <>
     <Nav>
        <NavbarContainer to='/'>
            <>Student MIS Portal</>
        </NavbarContainer>
     </Nav> 
    </>
  )
}

export default Navbar
