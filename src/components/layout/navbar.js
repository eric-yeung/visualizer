import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


const Navibar = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        
        <NavbarBrand >Navigation</NavbarBrand>
                
        <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://github.com/eric-yeung/visualizer" target="_blank">About/GitHub</NavLink>
            </NavItem>
 
          </Nav>
      </Navbar>
    </div>
  );
}

export default Navibar;