import React from 'react';
import './Home.css'
import banner from '../../images/bannerbackground.png'
import { Form, Button } from 'react-bootstrap';
import { Link, Outlet,NavLink } from 'react-router-dom';
import ChooseUs from './ChooseUs/ChooseUs';
import Footer from '../Shared/Footer/Footer';
import {useNavigate} from 'react-router-dom';

import PageTItle from '../Shared/PageTitle/PageTItle';
// import './home.scss'

const Home = () => {
  
  const navigate=useNavigate();
  
  const handleCheckout=()=>{
    navigate('/checkout')
  }
  return (
    

    <div className='home-full'>
      <PageTItle title='home'></PageTItle>
      <div className="banner">
        <header className='mb-5 home-header-section'>
          <img className='img-fluid' src={banner} alt="" />
          <div className='w-100 position-absolute top-0 mt-5 text-center'>
            <h2>We serve you the best</h2>
            <Form className="d-flex mx-auto text-box">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 "
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </div>
        </header>
        <section className='outlet '>
          <section className=' w-100 mx-auto mx-auto d-flex justify-content-evenly mb-4 '>
            <NavLink to="breakfast"
             
            >Breakfast </NavLink>
            <NavLink to="lunch"
           >Lunch</NavLink>
            <NavLink to="dinner"
              
            > Dinner</NavLink>
            
       </section>
       {/* <div style={{ border:'1px solid green', color:'blue',width:'70%', display:'block',margin:"0 auto 20px auto" }}></div>
           */}
      
          <Outlet></Outlet>
          <Button onClick={handleCheckout} className='last-checkout bg-secondary d-block mx-auto'> Checkout your food</Button>
        </section>
        <section className='choose-use mt-5'>
          <h2 className='text-center mb-4'>Why will you choose us?</h2>
          <ChooseUs></ChooseUs>

        </section>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;