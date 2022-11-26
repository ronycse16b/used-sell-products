import React, { useContext, useState } from 'react';
import { set, useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthProvider';
import toast from 'react-hot-toast';


const Signup = () => {

const {createUser}= useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [error, setError] = useState('');

    const handelSignup = (data) => {
        console.log(data);

        const email = data.email;
        const password = data.password;

        setError('')
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            useForm.reset();
         
                toast.success('User has been created')
            

        })
        .catch(error => {
            setError(error.message.slice(15,));
        });
    }


    return (
        <div>
            <div className="w-full max-w-xl xl:px-10 xl:w-5/12 mx-auto my-24 ">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                        Sign up Here
                    </h3>

                   <p className='text-primary font-bold text-xl'>{error}</p>
                    <form onSubmit={handleSubmit(handelSignup)}>
                        <div className="mb-1 sm:mb-2 ">
                            <label
                                htmlFor="firstName"
                                className="inline-block mb-1 font-medium"
                            >
                                Name
                            </label>
                            <input {...register("name", { required: "Name is required" })} aria-invalid={errors.name ? "true" : "false"}
                                placeholder=" suppose Abdul Karim "

                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"

                            /> {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                        </div>
                        <div className="mb-1 sm:mb-2 ">
                            <label
                                htmlFor="firstName"
                                className="inline-block mb-1 font-medium"
                            >
                                Email
                            </label>
                            <input {...register("email", { required: "Email Address is required" })} aria-invalid={errors.email ? "true" : "false"}
                                placeholder="example@example.com"

                                type="email"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="firstName"
                                name="email"
                            /> {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="mb-1 sm:mb-2">
                            <label
                                htmlFor="lastName"
                                className="inline-block mb-1 font-medium"
                            >
                                password
                            </label>
                            <input  {...register("password", { required: "password is required ", minLength: { value: 6, message: "password mustbe 6 charecter" }, pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]/, message: "password need to strong use (uppercase,lowercase,number, special character)" } })} aria-invalid={errors.password ? "true" : "false"}
                                placeholder="********************"

                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="lastName"
                                name="password"
                            /> {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        </div>
                        <div className="mt-4 mb-2 sm:mb-4">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-n bg-primary one"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="text-xs text-center sm:px-6 text-black">Do you have an account?
                        <Link to='/login' rel="noopener noreferrer" className="underline  text-yellow-600 font-bold"> Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;