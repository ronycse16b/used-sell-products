import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import Loader from '../Loader/Loader';


const AllBuyer = () => {
 
    const [deleteUser , setDeleteUser] = useState(null)

    const user = 'User';
    const { data: buyers = [''], refetch, isLoading } = useQuery({
        queryKey: ['users', user],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=${user}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make admin successful.')
                refetch();
            }
        })
    }



    if (isLoading) {
        return <Loader></Loader>
    }


    const closeModal = () => {
        setDeleteUser(null);
    }


    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">

                    <thead className="dark:bg-gray-700">
                        <tr className="text-left">
                            <th className="p-3">S/N #</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((user, i) => <tr key={user._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">

                                <td className="p-3">
                                    <p>{i + 1}</p>
                                </td>
                                <td className="p-3">
                                    <p>{user.name}</p>
                                </td>
                                <td className="p-3">
                                    <p>{user.email}</p>
                                </td>


                                <td className="p-3 ">
                                { user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-accent  mr-3'>Make Admin</button>}
                                <label onClick={() => setDeleteUser(user)} htmlFor="confirmation-modal" className="btn btn-xs btn-primary  text-white hover:bg-primary">Delete</label>
                                
                                </td>
                                <td className="p-3">
                                    
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                
            </div>
            {
                deleteUser && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={` #Noted : User cannot be Back.`}
                successButtonName="Delete"
                closeModal = {closeModal}
                modalData = {deleteUser}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllBuyer;