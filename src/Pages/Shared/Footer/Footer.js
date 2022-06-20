import React from 'react';
import './footer.css'
import logo2 from '../../../images/logo2.png'

const Footer = () => {
    return (
       <div className='footer '>
         <div className='d-flex container justify-content-between'>
            <div className='footer-left-side d-flex flex-column justify-content-around'>
                <img style={{height:"50px"}} className='' src={logo2} alt="" />
                <p className='text-white'> &copy; is mine @{new Date().getFullYear()}
                </p>
                
            </div>
            <div className='footer-right-side d-flex justify-content-between my-5 flex-column'>
                <div className='upside d-flex'>
                <div className='footer-right-left text-white'>
                    <ul className='text-left p-3'>
                        <li>About us</li>
                        <li>About online food</li>
                        <li>know more</li>
                        <li>career</li>
                    </ul>
                    
                    </div>
                    <div className='footer-right-right text-white align-text-left p-3'>
                    <ul>
                    <li>Reach us</li>
                        <li>Email us</li>
                        <li>send feedback</li>
                        <li>life in red-chilly</li>
                    </ul>
                    </div>
                </div>
                <div className='downside text-white'>
                        <p><span>privacy policy</span> <span>terms of use</span> <span>pricing</span></p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Footer;