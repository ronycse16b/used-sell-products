
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import  logo from './logo.png';

const Nav = () => {
    const menuIteams = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/category'>Bike Category</Link></li>
        <li><Link to='/order'>My Orders</Link></li>
        <li><Link to='/dashboard'>My Dashboard</Link></li>

        <li><Link to='/login'>Login</Link></li>
    </>
    return (
        <div className="navbar p-0 ">
            <div className="navbar p-0 lg:pl-72 border-b-2 border-b-primary">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-primary text-base-100 ">
                        {menuIteams}
                    </ul>
                </div>
              <div className=' lg:w-1/4 '>
              <Link to='/' className="btn btn-ghost hover:bg-transparent font-bold uppercase-case italic text-xl  bg-white">Used  <img src={logo} alt="" className='w-10' /><span className='text-primary font-bold px-1'>   Bike </span> BD</Link>
              </div>
              <div  className="navbar-center hidden lg:flex  text-base-100  lg:w-3/4  triangle-topright relative ">
                <ul className="menu menu-horizontal p-0 absolute custom ">
                    {menuIteams}
                </ul>
            </div>
            <label htmlFor="dasboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
            </div>
           

        </div>
    );
};

export default Nav;

