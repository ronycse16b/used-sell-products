import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthProvider';
import Loader from '../Loader/Loader';
import Product from './Product';

const Products = () => {
    const {loading} = useContext(AuthContext)


    const [brands , setBrands] = useState([]);

    useEffect(()=>{

        fetch(`https://resale-server-side-nine.vercel.app/bikes`)
         .then(res => res.json())
         .then(data => setBrands(data))
        
        
        
        
        } ,[])



      
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-5">

                <p className='py-10 text-3xl text-accent font-bold'> All Bikes </p>

                <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2   sm:mx-auto lg:max-w-full">

                    {
                        brands.map(brand => <Product brand={brand} key={brand._id}></Product>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Products;