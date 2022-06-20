import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <>
       
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
               
       
          <Navbar.Brand as={Link} to='/home'><img style={{height:'20px'}} className='img-fluid' src={logo} alt="" /></Navbar.Brand>
     
      
                    <Navbar.Brand href="/home">Red-chilly</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>  

                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>


                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        <Nav.Link as={Link} to='/register'>Register</Nav.Link>


                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;