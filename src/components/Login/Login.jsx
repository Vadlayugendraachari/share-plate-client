import { motion } from "framer-motion"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
    const {signInUserWithEmailandPassword} = useContext(AuthContext);
    const handleLoginForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUserWithEmailandPassword(email, password)
        .then(res =>{
            Swal.fire(
                'Congratulation!',
                'You successfuly Loged In!',
                'success'
              )
        })
        .catch(error =>{
            const errMessage = error.message
            Swal.fire({
                icon: 'error',
                title: 'Oops...! Something went wrong!',
                text: errMessage,
                footer: '<a href="">Why do I have this issue?</a>'
              })
        })
    }
    const loginBg = {
        backgroundImage:'url(https://i.ibb.co/MRB45wt/pexels-cottonbro-studio-3944307.jpg)',
        backgroundSize: 'cover', // You can add additional background properties here
      };
    return (

        <div className="relative overflow-hidden" style={loginBg}>
        <div className="hero-overlay bg-[#0000007F]">
            <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
                <div className="w-full md:w-1/2 lg:w-1/3 mx-auto text-center">
                    <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200">
                        <span className="text-blue-600 dark:text-blue-500">Login</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500">
                        Welcome back to our food-sharing family. Log in and continue spreading the joy of sharing meals with your community.
                    </p>
                    <div className="mt-8 grid">
                        <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4">
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
                    <form onSubmit={handleLoginForm}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Email address</span></label>
                            <input type="email" name="email" id="hs-hero-email-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 " placeholder="Email address" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Password</span></label>
                            <input type="password" name="password" id="hs-hero-password-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 " placeholder="Password" />
                        </div>
                        <div className="grid">
                            <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4">Login</button>
                            <Link to="/reg">New User? Create your account </Link>
                        </div>
                    </form>

                </div>
            </div>
            </div>
        </div>

    );
};

export default Login;