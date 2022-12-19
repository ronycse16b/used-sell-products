

import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import Catagory from './Catagory';
import FadeLoader from 'react-spinners/FadeLoader';

const Categories = () => {

    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
        fetch(`https://resale-server-side-ronycse16b.vercel.app/brands`)
            .then(res => res.json())
            .then(data => {
                setBrands(data)

                setLoading(false);

            })




    }, [])





    return (
        <section className='  ' >

            <div className=' bg-slate-200'>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-teal-accent-400">
                                Brand new
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
                            <span className="relative inline-block text-black">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">The</span>
                            </span>{' '}
                            <span className='text-black'>Bikes Categories of Used <span className='text-primary font-bold italic'>BIKE</span> BD</span>
                        </h2>

                    </div>
                    <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-24">
                        {
                            loading ?
                             <div className='flex justify-center items-center '>
                                <FadeLoader

                                    color={'#f10b0b'}
                                    loading={loading}
                                    size={30}

                                />
                            </div>

                                :

                                brands?.map(brand => <Catagory brand={brand} key={brand._id} ></Catagory>)
                        }

                    </div>
                </div>
            </div>
        </section>


    );
};

export default Categories;