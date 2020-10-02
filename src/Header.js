
import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
    Modal,
    ModalBody
} from 'reactstrap';

import './Header.css';
import ModalExample from './modal';

function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    
    return(
        <div>
      <Navbar>
            <NavbarBrand className="title">1000LB Club</NavbarBrand>
            
            <Nav>
                <h3 onClick={toggle}>Login</h3>
                <Modal isOpen={isOpen} toggle={toggle} className="center">
                    <ModalBody>Coming Soon!</ModalBody>
                </Modal>
            </Nav>
            <Nav>
             
                <ModalExample className="BTN"/>
            </Nav>
        
      </Navbar>
    </div>
    );
    
    
    
    
}

export default Header;