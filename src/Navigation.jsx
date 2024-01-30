import React, { useState} from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,NavbarText, Button} from 'reactstrap';
import  logo  from "./images/Flex (4).webp"; 



function Navigation ( ) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  
  


  return (
    <div>
     <Navbar className='navigation' expand="lg" container="xxl" fixed='top' >
     <NavbarBrand className='mx-4'>
      <img
        alt="logo"
        src= {logo}
       style={{
          height: 30,
          width:60,
        }}
      />
    </NavbarBrand >
        <NavbarToggler onClick={toggle} className='navigation-toggler'/>
        <Collapse isOpen={isOpen} navbar>
          <Nav justified className="mx-auto" navbar >
            <NavItem>  
                <NavLink className='navigation-link m-2' href="/components/">Solutions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navigation-link m-2' href="/products/">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navigation-link m-2' href="/Industries/">Industries</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navigation-link m-2' href="/Support/">Support</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navigation-link m-2' href="/Resources/">Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className='navigation-link m-2'href="/Pricing/">Pricing</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className='mx-4 navigation-text navigation-text:hover'>Log in </NavbarText>
          <Button size='lg' className="nav-btn nav-btn:hover">Sign Up Now</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;

