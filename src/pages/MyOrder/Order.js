
import React, { useState } from 'react';
import toast from 'react-hot-toast';


const Order = ({ order,refetch }) => {




    const handleDeleteOrder = order => {
        fetch(`https://resale-server-side-ronycse16b.vercel.app/bookings/${order._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Bikes ${order.brand} deleted successfully`)
                }
            })
    }



 
    const { Model, brand, img, price ,_id
    } = order;

    return (
        <div >
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between border-2 px-5 mt-3">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={img} alt="Polaroid camera" />
                    <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8"> Brand Name: {brand} </h3>
                                <p className="text-sm dark:text-gray-400">Model:{Model}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">{price} Taka</p>


                            </div>

                        </div>
                        <div className="flex text-sm divide-x justify-between">
                            <div className=' flex text-primary'>
                                <button onClick={()=>handleDeleteOrder(order)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                        <rect width="32" height="200" x="168" y="216"></rect>
                                        <rect width="32" height="200" x="240" y="216"></rect>
                                        <rect width="32" height="200" x="312" y="216"></rect>
                                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                    </svg>
                                    <span >Remove</span>
                                </button>

                            </div>
                            <button className='btn btn-accent btn-sm hover:bg-primary text-white hover:text-white' >Payment</button>
                        </div>
                    </div>
                 
                </div>
            </li>
        </div>
    );
};

export default Order;