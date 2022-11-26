import React from 'react';

const BookingModal = ({data}) => {
    console.log(data);
    
    return (
        <>
            <input type="checkbox" id="BookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="BookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="w-full  ">
                        <div className="p-10">
                            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                Sign in Here
                            </h3>
                            <form>
                                <div className="mb-1 sm:mb-2 ">
                                    <label
                                        htmlFor="firstName"
                                        className="inline-block mb-1 font-medium"
                                    >
                                        Email
                                    </label>
                                    <input defaultValue={data.Brand}
                                        placeholder="example@example.com"
                                        required
                                        type="email"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        id="firstName"
                                        name="email"
                                    />
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        htmlFor="lastName"
                                        className="inline-block mb-1 font-medium"
                                    >
                                        password
                                    </label>
                                    <input
                                        placeholder="********************"
                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        id="lastName"
                                        name="password"
                                    />
                                </div>
                                <div className="mt-4 mb-2 sm:mb-4">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-n bg-primary one"
                                    >
                                        Sign in
                                    </button>
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