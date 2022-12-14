import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Brand from './Brand';

const Brands = () => {
    const brands = useLoaderData([]);

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                
                {
                brands.map(brand => <Brand brand={brand} key={brand._id}></Brand>)
                }
              
            </div>
        </div>
    );
};

export default Brands;