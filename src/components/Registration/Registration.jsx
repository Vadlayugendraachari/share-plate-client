import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import PageTitle from "../PageTitle";
import toast, { Toaster } from 'react-hot-toast';
const Registration = () => {
    const { signUpWithEmailandPassword, signUpUserWithGoogle, updateUser, user } = useContext(AuthContext);
    //Sign In With Google
    const handleGoogleSignIn = () =>{
        signUpUserWithGoogle();
    }
    //
    const handleReginForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const displayName = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        //Registration using email & pass
        signUpWithEmailandPassword(email, password)
            .then(res => {
                updateUser(displayName, photoURL)
                toast.success('Successfluy Regestered!');
            })
            .catch(error => {
                const errMessage = error.message;
                toast.error('Oops! Something went wrong');
            })

            console.log(user)
    }
    const loginBg = {
        backgroundImage: 'url(https://i.ibb.co/M1MHNGz/pexels-roman-odintsov-4871119.jpg)',
        backgroundSize: 'cover',
    };
    const customBg = {
        background: 'rgba(71, 69, 69, 0.19)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(9.6px)',
        WebkitBackdropFilter: 'blur(9.6px)',
    }
    return (
        <AnimatePresence>
        <PageTitle title='SharePlate || Registration'></PageTitle>
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                exit={{ x: window.innerHeight }}
                className="relative overflow-hidden mt-8" style={loginBg}>
                <div className="hero-overlay bg-[#0000007F]" style={customBg}>
                    <div className="mx-auto py-12 px-4 sm:px-6 md:py-20 lg:py-32 md:px-8">
                        <motion.div
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 300, opacity: 0 }}
                            className="w-full md:w-1/2 lg:w-1/3 mx-auto text-center">
                            <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200">
                                <span className=" text-5xl font-extrabold">Registration</span>
                            </h1>
                            <p className="mt-3 text-base text-white">
                                Join our food-sharing community and start your culinary journey. Register today and be part of something deliciously rewarding.
                            </p>
                            <div className="mt-8 grid">
                                <button onClick={handleGoogleSignIn} type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4">
                                    <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                        <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                        <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                        <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                        <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                                    </svg>
                                    Continue with Google
                                </button>
                            </div>

                            <div className="py-6 flex items-center text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:mr-6 after:flex-[1_1_0%] after:border-t after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>
                            <form onSubmit={handleReginForm}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Email address</span></label>
                                    <input type="text" name="name" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-indigo-600 focus:ring-indigo-600 sm:p-4 " placeholder="Name" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Email address</span></label>
                                    <input type="text" name="photoURL" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-indigo-600 focus:ring-indigo-600 sm:p-4 " placeholder="Photo Url" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Email address</span></label>
                                    <input type="email" name="email" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-indigo-600 focus:ring-indigo-600 sm:p-4 " placeholder="Email address" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Password</span></label>
                                    <input type="password" name="password" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-indigo-600 focus:bg-indigo-600 sm:p-4 " placeholder="Password" />
                                </div>
                                <div className="grid">
                                    <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-600 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4">Register</button>
                                    <Link className="text-white" to='/login'>Already a user? Login Here.</Link>
                                </div>
                            </form>

                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
        </AnimatePresence>
    );
};

export default Registration;