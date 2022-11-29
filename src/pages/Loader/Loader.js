import React from 'react';
import toast from 'react-hot-toast';

const Loader = () => {

    return (
        <div className='lg:py-[500px]'>
            <div className="flex items-center justify-center ">
                {/* <div className="spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full text-primary" role="status">
                 
                </div> */}
                <svg className=" bg-primary animate-spin h-8 w-8 mr-3 ..." viewBox="0 0 24 24">

                </svg>
                Loading Please wait ....
            </div>
        </div>
    );
};

export default Loader;