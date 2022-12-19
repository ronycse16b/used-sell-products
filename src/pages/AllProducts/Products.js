import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthProvider';
import Loader from '../Loader/Loader';
import Product from './Product';
import PulseLoader from "react-spinners/PulseLoader";

const Products = () => {

    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(false);




    useEffect(() => {

        setLoading(true);
       
        fetch(`https://resale-server-side-ronycse16b.vercel.app/bikes`)
            .then(res => res.json())
            .then(data => {
                setBrands(data);
                setLoading(false);


            })





    }, [])




    return (
        <div>
            <div className="px-4 py-9 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-5">

                <p className='lg:py-8 text-3xl text-accent font-bold'> All Bikes </p>

                <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2   sm:mx-auto lg:max-w-full">

                    {
                        loading ?<Loader></Loader> :

                            brands.map(brand => <Product brand={brand} key={brand._id}></Product>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Products;