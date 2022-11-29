
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';
import logo from './logo.png';
import { AuthContext } from '../../Context/Auth/AuthProvider';

const Nav = () => {

    const navigate = useNavigate();

    const { user, logOut } = useContext(AuthContext);


    const handelLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
             
            navigate('/')


    }
    const menuIteams = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/bikes'>All Bikes</Link></li>
        <li><Link to='/category'>Bike Category</Link></li>

        {user?.uid ?
            <>
                <li><Link to='/order'>My Orders</Link></li>
                <li><Link to='/dashboard'>My Dashboard</Link></li>
                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                {
                    user?.photoURL ?

                        <img src={user?.photoURL} alt="" className=" tooltip  ml-5 w-10 h-10 rounded-full  dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                        />
                        : <img className="w-10 h-10 rounded-full mt-1 " src="https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png" alt="" />


                }
                </div>
                <li><button onClick={handelLogout}>Sign out</button></li>
            </>

            : <li><Link to='/login'>Signin / Signup</Link></li>

        }
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
                <div className="navbar-center hidden lg:flex  text-base-100  lg:w-3/4  triangle-topright relative ">
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

