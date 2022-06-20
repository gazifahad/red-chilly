import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css'

import { Link } from 'react-router-dom';

const Login = () => {
    return (
       <div className="form-container d-flex align-items-center
       justify-content-center position-relative">
         <Form className='container full-form w-50 text-black-50   position-absolute  bold'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button className='d-block w-100 btn-success' variant="primary" type="submit">
         Login
        </Button>
        <p>Not a member? <span><Link className='text-decoration-none' to={'/register'}>Signup here</Link></span></p>
      </Form>
       </div>
    );
};

export default Login;