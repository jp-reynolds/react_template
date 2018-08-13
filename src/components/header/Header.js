import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <Navbar>
  			<Navbar.Header>
    			<Navbar.Brand>
      				<Link to={'/'}>Home</Link>
    			</Navbar.Brand>
  			</Navbar.Header>
	  		<Nav pullRight>
	    		<NavItem className="episodes" eventKey={1} href='/episodes'>
	      			Episodes
	    		</NavItem>
	    		<NavItem className="about" eventKey={2} href='/about'>
	     			About
	    		</NavItem>
	    		<NavItem className="contact" eventKey={3} href='/contact'>
	      			Contact Us
	    		</NavItem>
	  		</Nav>
		</Navbar>
    );
  }
}

export default Header;