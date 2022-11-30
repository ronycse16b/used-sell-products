import React, { useContext, useState } from 'react';
import { set, useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthProvider';
import useToken from '../Hook/useToken';



const Signup = () => {

    const navigate = useNavigate()

    const { createUser, updateUserProfile,  } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [error, setError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);

    if(token){
        navigate('/');
    }

    const handelSignup = (data) => {


        const email = data.email;
        const password = data.password;

        setError('')
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handelUpdateUser(data.name);
                saveUser(data.name, email, data.role)
                toast.success('user create successfully');
            })
            .catch(error => {
                setError(error.message);
            });

        // user data updated functio
    }

    const handelUpdateUser = (name) => {
        const profile = {
            displayName: name,
            // photoURL: photoUrl,
        }
        updateUserProfile(profile)
            .then(result => {


            })
            .catch(error => {
                setError(error.message);
            });



    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role, status: 'unverified' };
        fetch('https://resale-server-side-nine.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);

            })
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
                        <div className="mb-1 sm:mb-2">
                            <select className="select select-secondary w-full " {...register("role")}>

                                <option defaultValue={'user'}>User</option>
                                <option value={'seller'}>Seller</option>

                            </select>
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