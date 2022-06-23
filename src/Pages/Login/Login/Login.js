import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Login.css'

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import auth from './../../../firebase.init';
import PageTItle from '../../Shared/PageTitle/PageTItle';

const Login = () => {
  const [sendPasswordResetEmail, sending, rseterror] = useSendPasswordResetEmail(
    auth
  );
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    await signInWithEmailAndPassword(email, password);
    if (user) {
      navigate(from, { replace: true })
    }
  }
  const emailRef = useRef('');
  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("please check ur email");
  }
  if (user) {
    navigate(from, { replace: true })
  }

  return (
    <div className="form-container">
      <PageTItle title="login"></PageTItle>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h2 className='text-center text-secondary mt-2'>Please login</h2>
      <Form onSubmit={handleLoginSubmit} className='container full-form 
         text-black-50 w-50 mt-5  bold'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required ref={emailRef} type="email" name='email' placeholder="Enter email" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" name='password' placeholder="Password" />
        </Form.Group>

        <Button className='d-block w-100 btn-success' variant="primary" type="submit">
          Login
        </Button>
        <p className='mt-2'>forgot password? <span ><Button onClick={resetPassword} className='text-decoration-none  btn-secondary ' >Reset Password</Button></span></p>
        <p>Not a member? <span><Link className='text-decoration-none' to={'/register'}>Signup here</Link></span></p>
      </Form>
    </div>
  );
};

export default Login;