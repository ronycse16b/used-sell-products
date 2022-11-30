import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [error, setError] = useState('');
    const imageHostKey = process.env.REACT_APP_imgbb;
   
   
  
    const handelLogin = (data) => {

            const name = data.brand;
            const price = data.price;
            const discription = data.discription;
            const image = data.image[0];
    

        const formData = new FormData();
        formData.append('image', image);
        const url = 

        fetch( `https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
        console.log(imgData);
        })
    }



    



    return (






        <div>
            <div className="w-full max-w-xl xl:px-10 xl:w-5/12 mx-auto my-24 ">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                        Add Product
                    </h3>
                    <p className='text-primary font-bold text-xl'>{error}</p>
                    <form onSubmit={handleSubmit(handelLogin)}>
                        <div className="mb-1 sm:mb-2 ">
                            <label
                                htmlFor="firstName"
                                className="inline-block mb-1 font-medium"
                            >
                                Brand
                            </label>
                            <input {...register("brand", { required: "brand Name is required" })} aria-invalid={errors.brand ? "true" : "false"}
                                placeholder="Brand Name"

                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="firstName"
                                name="brand"
                            /> {errors.brand && <p className='text-red-600' role="alert">{errors.brand?.message}</p>}
                        </div>
                        <div className="mb-1 sm:mb-2">
                            <label
                                htmlFor="lastName"
                                className="inline-block mb-1 font-medium"
                            >
                                Price
                            </label>
                            <input  {...register("price", { required: "price is required " })} aria-invalid={errors.price ? "true" : "false"}
                                placeholder="*Price"

                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="lastName"
                                name="price"
                            /> {errors.price && <p className='text-red-600' role="alert">{errors.price?.message}</p>}
                        </div>
                        <div className="mb-1 sm:mb-2">
                            <label
                                htmlFor="lastName"
                                className="inline-block mb-1 font-medium"
                            >
                                Discription
                            </label>
                            <input  {...register("discription", { required: "discription is required " })} aria-invalid={errors.discription ? "true" : "false"}
                                placeholder="discription"

                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="lastName"
                                name="discription"
                            /> {errors.discription && <p className='text-red-600' role="alert">{errors.discription?.message}</p>}
                        </div>
                        <div className="mb-1 sm:mb-2">
                            <label
                                htmlFor="lastName"
                                className="inline-block mb-1 font-medium"
                            >
                                Product Image
                            </label>
                            <input  {...register("image", { required: "discription is required " })} aria-invalid={errors.discription ? "true" : "false"}
                            

                                type="file"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="lastName"
                                name=""
                            /> {errors.discription && <p className='text-red-600' role="alert">{errors.discription?.message}</p>}
                        </div>
                        <div className="mt-4 mb-2 sm:mb-4">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-n bg-primary one"
                            >
                               Add Product
                            </button>
                        </div>
                    </form>
                  
                </div>
            </div>
        </div>

    );
};

export default AddProduct;