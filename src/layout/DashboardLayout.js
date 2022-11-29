import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from '../pages/Nav/Nav';

const DashboardLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="drawer drawer-mobile">
                <input id="dasboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="dasboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu w-80    text-white  relative" >
                        <img
                            src="https://as1.ftcdn.net/v2/jpg/01/43/46/38/1000_F_143463855_Z4CtbGdK9igOKXGH74RXVtyUWSrv4ciT.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            className="absolute inset-0 object-cover w-full h-full"
                            alt=""
                        />
                        <div className='bg-opacity-80 bg-black relative min-h-screen  '>
                            <li className='hover:bg-primary hover:text-white '><a>My Products</a></li>
                            <li className='hover:bg-primary hover:text-white '><a>My Buyer</a></li>
                            <li className='hover:bg-primary hover:text-white '><a>Add Product</a></li>
                            <li className='hover:bg-primary hover:text-white '><Link to='/dashboard/seller'>All Sellers</Link></li>
                            <li className='hover:bg-primary hover:text-white '><a>All Buyers</a></li>
                            <li className='hover:bg-primary hover:text-white '><a> Reported Items</a></li>
                        </div>


                    </ul>

                </div>
            </div>


        </div>
    );
};

export default DashboardLayout;