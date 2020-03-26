import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const TopNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/home">HOME</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/new">Add a new plant!</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://plants.usda.gov/java/">Resources</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>Signed in as (insert later)</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopNavbar;