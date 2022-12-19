import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/Auth/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../Hook/useToken';
import Loader from '../Loader/Loader';




const Login = () => {


    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const [error, setError] = useState('');
    const { signIn, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    if(token){
        navigate(from, { replace: true });
    }

 



  

  

    const handelLogin = (data) => {
       
      
        setError('')
        signIn(data.email, data.password)
            .then(result => {
           
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                setError(error.message.slice(15,));
            });


    }

    // google popup sign in function 
    const handelGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                saveUser(result.user?.displayName,result.user?.email,)
           

                
            })
            .catch(error => {
                setError(error.message);
            });



          
          
            
    }


    const saveUser = (name, email) => {
        const user = { name, email, role:'User' };
        console.log(user);
        fetch(`https://resale-server-side-ronycse16b.vercel.app/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
            

            })
    }






    return (

        <div>
            <div className="w-full max-w-xl xl:px-10 xl:w-5/12 mx-auto my-24 ">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                        Sign in Here
                    </h3>
                    <p className='text-primary font-bold text-xl'>{error}</p>
                    <form onSubmit={handleSubmit(handelLogin)}>
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
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4 py-2">
                        <button onClick={handelGoogleSignin} aria-label="Log in with Google" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>

                    </div>
                    <p className="text-xs text-center sm:px-6 text-black">Don't have an account?
                        <Link to='/signup' rel="noopener noreferrer" className="underline  text-yellow-600 font-bold"> Sign up</Link>
                    </p>
                </div>
            </div>
        </div>



    );
};

export default Login;

