import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthProvider';
import Loader from '../Loader/Loader';
import Order from './Order';



const MyOrder = () => {
    const { user } = useContext(AuthContext);

    const { data: bookings = [''], refetch, isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })





    if(isLoading){
        return <Loader></Loader>
    }



    return (
        <div >
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 conatiner mx-auto lg:py-20">
              {
                bookings.length > 0 ? <h2 className="text-xl font-semibold">You Have {bookings.length} Order</h2> :<h2 className="text-xl font-semibold">You Dont Have Any Order Right Now</h2>
              }
                  

                   
                <ul className="flex flex-col divide-y divide-gray-700">



                  {
                    bookings.map(order => <Order key={order._id} order={order} refetch={refetch} ></Order>)

                  } 


                </ul>
               
                <div className="flex justify-end space-x-4">
                    <Link to='/bikes' type="button" className="px-6 py-2 border rounded-md border-violet-400  text-black">Back
                        <span className="sr-only sm:not-sr-only">to shop</span>
                    </Link>
                  
                </div>
            </div>

        </div>
    );
};

export default MyOrder;