import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Booking Modal/BookingModal';

const BikeDetails = () => {

    const [data ,setData] = useState([]);
    const SingleBikeDetails = useLoaderData();
    const { Bike_type, Brand, Condition, Edition, Engine_capacity, Kilometers_run, Model, Year_of_Manufacture, details, image_url, price } = SingleBikeDetails;




    return (
        <div className="card w-96 lg:w-[900px] lg:h-[800px] bg-base-100 shadow-xl container mx-auto my-16">


            <figure><img src={image_url} alt="Shoes" className='lg:w-full lg:px-20' /></figure>
            <div className="card-body lg:h-[400px]">
                <div>
                    <p className='font-bold'>{Brand}{Model}</p>
                </div>
                <h2 className="card-title text-green-900 font-bold">
                    Price {price}
                    <div className="badge badge-secondary">Taka</div>
                </h2>
                <div className='flex justify-start'>
                    <div>
                        <p>Bike type: <span className='font-bold'>{Bike_type}</span></p>
                        <p>Condition: <span className='font-bold'>{Condition}</span></p>
                        <p>Edition  :   <span className='font-bold'>  {Edition}</span></p>
                    </div>
                    <div className=' ml-10'>
                       <p>Engine Capacity: <span className='font-bold'>{Engine_capacity}</span> </p>
                        <p>Kilometers Run: <span className='font-bold'> {Kilometers_run}</span></p>
                   <p>Year_of_Manufacture: <span className='font-bold'>{Year_of_Manufacture}</span></p>
                    </div>
                </div>
                <p className='font-bold'>Description</p>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline btn btn-accent">favorite</div>
                    <label onClick={()=>setData(SingleBikeDetails)} htmlFor="BookingModal" className="btn btn-primary">Bike Book Now</label>
                
                </div>
            </div>
            <BookingModal data={data}></BookingModal>
        </div>
    );
};

export default BikeDetails;