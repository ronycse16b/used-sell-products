import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='bg-slate-50  lg:min-h-screen'>
            <section className="flex items-center h-full p-16  text-black">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-lg text-center">
                     
                        <img src="https://cdn.dribbble.com/users/718859/screenshots/3267029/media/288dca6a18950d67040138304ba3837d.gif" className='w-full' alt="" />
                        <Link to ='/' rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-primary text-gray-900">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;