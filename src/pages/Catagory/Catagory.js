import React from 'react';
import {Link} from 'react-router-dom';

const Catagory = ({brand}) => {

    return (
        <div>
            <div className="flex flex-col justify-between p-5 border-2 rounded shadow-sm bg-white border-primary mt-12 ">
                <div>
                    <div className="flex items-center justify-center w-full h-16 mb-4 rounded-full bg-indigo-50">
                        <img
                            src={brand.image_url}
                            className="object-cover w-full h-48  border-2 border-primary"
                            alt="" />
                    </div>
                    <div className='mt-20'>
                        <h6 className="mb-2 leading-5 font-bold">{brand.name}</h6>
                       
                    </div>
                </div>
                <Link to ={`/brands/${brand.id}`}
                    
                    aria-label=""
                    className="inline-flex text-white btn btn-primary items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                    See All
                </Link>
            </div>
        </div>
    );
};

export default Catagory;