import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../images/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css'

import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    
    const [user]=useAuthState(auth);
    const logOut=()=>{
     signOut(auth);   
    }
    
    return (
        <>
       
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='sticky-top'>
                <Container>
               
       
          <Navbar.Brand as={Link} to='/'><img style={{height:'20px'}} className='img-fluid' src={logo} alt="" /></Navbar.Brand>
     
      
                    <Navbar.Brand href="/">Red-chilly</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>  

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


                    {
                        user ? <nav className='d-flex justify-content-center align-items-center'><b className='text-white'>{user?.displayName} </b> <Nav.Link className='logout' onClick={logOut}  as={Link} to='/login'>Logout</Nav.Link> </nav>  : <nav className='d-flex login-header'>
                            <Nav.Link  as={Link} to='/login'>Login</Nav.Link> <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                        </nav>
                    }


                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;