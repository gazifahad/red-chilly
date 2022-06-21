import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';



const Registration = () => {
    const navigate=useNavigate();
    const nameRef=useRef("");
    const emailRef=useRef("");
    const passwordRef=useRef("");
    const retypePasswordRef=useRef("");
    const agreementRef=useRef(false);
    const [sendEmailVerification, sending, verificationerror] = useSendEmailVerification(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,loading, error] = useCreateUserWithEmailAndPassword(auth);
        if(user){
          navigate('/');
        }
            const formSignUp=async (event)=>{
            event.preventDefault();
            const name=nameRef.current.value;
            const email=emailRef.current.value;
            const password=passwordRef.current.value;
            const retypePassword=retypePasswordRef.current.value;
            const agreement=agreementRef.current.checked;
          await createUserWithEmailAndPassword(email,password);
          await sendEmailVerification(email);
          await updateProfile({displayName: name});
          
         
      }
     
     
    return (
        <div className="form-container  d-block border-2 ">
        
         <Form className='container w-50 text-secondary mt-5 bold full-form' onSubmit={formSignUp}>
         <h2 className='text-center'>singup here</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control required ref={nameRef} type="text" placeholder="Enter your name" />
          
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required ref={emailRef} type="email" placeholder="Enter your email" />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword1">
          <Form.Label>Retype Password</Form.Label>
          <Form.Control required ref={retypePasswordRef} type="password" placeholder="Retype your Password" />
        </Form.Group>
        
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check ref={agreementRef} type="checkbox" label="Agree to the terms and condition" />
      </Form.Group>
        
        <Button className='d-block w-100 btn-success' variant="primary" type="submit">
         Signup
        </Button>
        <p>Already a member? <span><Link className='text-decoration-none' to={'/login'}>Login here</Link></span></p>
      </Form>
       </div>
    );
};

export default Registration;