import React from 'react';
import { Link } from 'react-router-dom';

const Brand = ({brand}) => {
    console.log(brand);
    return (
        <div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <img
                    src={brand.image_url
                    }
                    className="object-cover w-full h-64"
                    alt=""
                />
                <div className="p-5 border border-t-0">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        
                            Brand Name :{brand.Brand}
                        
                        {/* <span className="text-gray-600">— 28 Dec 2020</span> */}
                    </p>
                    <a
                       
                        aria-label="Category"
                  
                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                         Bike Model:{brand.Model}
                    </a>
                    <a
                       
                        aria-label="Category"
                      
                        className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                         Price:{brand.price} Taka
                    </a>
                    <p className="mb-2 text-gray-700">
                    {brand.details.length>100 ? brand.details.slice(0, 100) +"..." : brand.details}
                    </p>
                    <Link to ={`/brands/Details/${brand._id}`}
                       
                        aria-label=""
                        className="inline-flex btn btn-primary items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        See All Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Brand;