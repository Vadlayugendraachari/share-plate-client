import { motion } from 'framer-motion';
import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import './Nav.css';
import toast, { Toaster } from 'react-hot-toast';
import { useTheme } from '../../hooks/ThemeContext';
import { SunMoon, Sun } from 'lucide-react';
const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    const { user, logOut } = useContext(AuthContext);
    const email = user?.email;
    const handleLogOut = () => {
        logOut();
        toast.success('Successfluy loged out!');
    }
    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="navbar bg-base-100"
            style={{ background: darkMode ? '#252525' : '#f8fafc' }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                        <li className='mx-4'><NavLink className='navLink text-[1rem]' to='/'>Home</NavLink></li>
                        <li className='mx-4'><NavLink className='navLink text-[1rem]' to='/avialabe'>Available Foods</NavLink></li>
                        <li className='mx-4'><NavLink className='navLink text-[1rem]' to='/add'>Add Food</NavLink></li>
                        <li className='mx-4'><NavLink className='navLink text-[1rem]' to='/manage'>Manage My Foods</NavLink></li>
                        <li className='mx-4'><NavLink className='navLink text-[1rem]' to='/myfood'>My Food Request</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='mx-4'><NavLink className='navLink text-[1rem]' to='/' style={{ color: darkMode ? 'white' : '#111827' }}>Home</NavLink></li>
                    <li className='mx-4'><NavLink className='navLink text-[1rem]' to='/avialabe' style={{ color: darkMode ? 'white' : '#111827' }}>Available Foods</NavLink></li>
                    <li className='mx-4'><NavLink className='navLink text-[1rem]' to='/add' style={{ color: darkMode ? 'white' : '#111827' }}>Add Food</NavLink></li>
                </ul>
                <Link to='/' className="logoBg btn btn-ghost normal-case text-xl">
                    <div className='flex flex-col justify-center items-center'>
                        <img className='w-1/2' src='https://i.ibb.co/SXQgrk2/sitelogo.png' alt='logo' />
                        <p className='logo-text'>SharePlate</p>
                    </div>
                </Link>
                <ul className="menu menu-horizontal px-1">
                    <li className='mx-4'><Link className='navLink text-[1rem]' to="/manage" style={{ color: darkMode ? 'white' : '#111827' }}>Manage My Foods</Link></li>
                    <li className='mx-4'><NavLink className='navLink text-[1rem]' to='/myfood' style={{ color: darkMode ? 'white' : '#111827' }}>My Food Request</NavLink></li>
                    <li className='mx-4'>   
                    <button onClick={toggleDarkMode}>
                        {darkMode ? <Sun style={{ color: darkMode ? 'white' : '#252525' }} /> : <SunMoon style={{ color: darkMode ? 'white' : '#252525' }}/>}
                    </button></li>
                </ul>
            </div>
            <div className="navbar-end flex lg:flex-col xl:flex-row gap-4">
                {
                    user &&
                    <div className="avatar mx-4">
                        <div className="w-12 mask mask-squircle">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                }
                {
                    user ? <button onClick={handleLogOut} className="btn" style={{ background: darkMode ? '#252525' : '#fff', color: darkMode ? '#fff' : '#333' }}>Log Out</button> : <NavLink to='/login' className="btn">Login</NavLink>
                }
            </div>
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
        </motion.div>
    );
};

export default Navbar;