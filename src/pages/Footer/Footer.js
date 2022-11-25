import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const Footer = () => {
    return (
        <div className='relative'>
            <img
                src="https://as1.ftcdn.net/v2/jpg/01/43/46/38/1000_F_143463855_Z4CtbGdK9igOKXGH74RXVtyUWSrv4ciT.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <footer className="footer p-10   lg:h-[400px] relative bg-opacity-80 bg-black  ">
                <div>
                    <Link to='/' className="btn btn-ghost font-bold uppercase-case italic text-xl  text-white">Used  <img src={logo} alt="" className='w-10 bg-white' /><span className='text-primary font-bold px-1'>   Bike </span> BD</Link>
                </div>
                <div className='text-white mt-10'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Bike Buy</a>
                    <a className="link link-hover">Bike Sell</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='text-white mt-10'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Category</a>
                </div>
                <div className='text-white mt-10'>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                 
                 <div className='text-white mt-11'>
                    <p> Pyment Partner</p>
                    <img src="https://www.ucc-bd.com/pub/media/wysiwyg/mobile-banking.png" alt="" className='w-80 ' />
                 </div>
            </footer>
     
        </div>
    );
};

export default Footer;