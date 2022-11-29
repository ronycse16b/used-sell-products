import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthProvider';


const BookingModal = ({ data }) => {

    const { Brand, Model, price, image_url } = data;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()


    const handelBooking = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const price = form.price.value;
        const name = form.name.value;
        const address = form.address.value;
        const number = form.number.value;
       



        const booking = {
            Model: Model,
            brand: Brand,
            email: email,
            price: price,
            name: name,
            address: address,
            number: number,
            img: image_url,

        }



        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('Booking confirmed');
                    form.reset('');
                    navigate('/order')

                  
                 
                }
                else {
                    toast.error(data.message);
                }
            })

    }




    return (
        <>
            <input type="checkbox" id="BookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="BookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="w-full  ">
                        <div className="p-5">
                            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                Bike Model : {Brand}{Model}
                            </h3>
                            <form onSubmit={handelBooking}>
                                <div className="mb-1 sm:mb-2 ">

                                    <input defaultValue={`${user?.email}`} disabled
                                        placeholder="example@example.com"

                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline "
                                        name='email'
                                    />
                                </div>
                                <div className="mb-1 sm:mb-2 ">

                                    <input defaultValue={user.displayName} disabled
                                        placeholder="example@example.com"

                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline "
                                        id="firstName"
                                        name="name"
                                    />
                                </div>
                                <div className="mb-1 sm:mb-2 ">

                                    <input defaultValue={price} disabled
                                        placeholder="example@example.com"

                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline "
                                        id="firstName"
                                        name="price"
                                    />
                                </div>
                                <div className="mb-1 sm:mb-2 ">

                                    <input
                                        placeholder="Your Location Please "

                                        type="text" required
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline "
                                        id="firstName"
                                        name="address"
                                    />
                                </div>
                                <div className="mb-1 sm:mb-2 ">

                                    <input
                                        placeholder="Your Phone Number  "

                                        type="number" required
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline "
                                        id="firstName"
                                        name="number"
                                    />
                                </div>

                                <div className="mt-4 mb-2 sm:mb-4">


                                    <div className="modal-action">
                                        <button type='submit' className="btn btn-primary w-full">Booking</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;