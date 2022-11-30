import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/Auth/AuthProvider';
import useAdmin from '../pages/Hook/useAdmin';
import useSeller from '../pages/Hook/useSeller';
import Nav from '../pages/Nav/Nav';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

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
                            {isSeller && <>

                                <li className='hover:bg-primary hover:text-white '><Link to ='/dashboard/'>My Products</Link></li>
                                <li className='hover:bg-primary hover:text-white '><Link to ='/dashboard/'>My Buyer</Link></li>
                                <li className='hover:bg-primary hover:text-white '><Link to ='/dashboard/addproduct'>Add Product</Link></li>
                            </>


                            }

                            {
                                isAdmin && <>
                                    <li className='hover:bg-primary hover:text-white '><Link to='/dashboard/seller'>All Sellers</Link></li>
                                    <li className='hover:bg-primary hover:text-white '><Link to='/dashboard/buyers'>All Buyers</Link></li>
                                    <li className='hover:bg-primary hover:text-white '><a> Reported Items</a></li>
                                </>
                            }


                        </div>


                    </ul>

                </div>
            </div>


        </div>
    );
};

export default DashboardLayout;