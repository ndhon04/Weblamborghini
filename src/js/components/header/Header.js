import '../../../css/header/Header.css';
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
} from 'reactstrap';
import logo from '../../../images/logo-lamborghini.png'
import {PiHexagonThin} from 'react-icons/pi';
import {MdKeyboardDoubleArrowDown} from 'react-icons/md'
import {TfiSearch} from 'react-icons/tfi';
import {PiShoppingCartSimpleLight} from 'react-icons/pi';
import {IoPersonOutline} from 'react-icons/io5';


export default function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return <div>
              <Navbar expand="md">
        <NavbarBrand href="/"><img className='animate__animated animate__flipInY animate__infinite ' src={logo} width={50}></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/Home" className='bf'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Header" className='bf'>Models</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Stores" className='bf'>stores</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/About" className='bf'>
                about
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText><a href='/'><TfiSearch/></a></NavbarText>
          <NavbarText><a href='/'><PiShoppingCartSimpleLight/></a></NavbarText>
          <NavbarText><a href='/'><IoPersonOutline/></a></NavbarText>
        </Collapse>
      <div className='select-models'>

      </div>
      </Navbar>
      <div className='banner'>
        <video loop autoPlay muted>
        <source src={require('../../../videos/videoHeader.mp4')} type="video/mp4" />
        </video>
        <div className='content-header'>
            <h2>designed by new desires</h2>
            <h1>lamborghini lazador</h1>
            <div className='btn-dropDown'>
                <PiHexagonThin className='btn-icon1'/>
                 <MdKeyboardDoubleArrowDown className='btn-icon2'/>
            </div>
        </div>
      </div>
    </div>
}