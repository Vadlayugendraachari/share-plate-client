import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import './Nav.css';
import Swal from 'sweetalert2';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
        Swal.fire(
            'You successfuly Loged Out!',
            'success'
        )
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='mx-4'><NavLink className='text-[1rem]' to='/'>Home</NavLink></li>
                        <li className='mx-4'><NavLink className='text-[1rem]' to='/avialabe'>Available Foods</NavLink></li>
                        <li className='mx-4'><NavLink className='text-[1rem]' to='/add'>Add Food</NavLink></li>
                        <li className='mx-4'><NavLink className='text-[1rem]' to='/manage'>Manage My Foods</NavLink></li>
                        <li className='mx-4'><NavLink className='text-[1rem]' to='/myfood'>My Food Request</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='mx-4'><NavLink className='text-[1rem]' to='/'>Home</NavLink></li>
                    <li className='mx-4'><NavLink className='text-[1rem]' to='/avialabe'>Available Foods</NavLink></li>
                    <li className='mx-4'><NavLink className='text-[1rem]' to='/add'>Add Food</NavLink></li>
                </ul>
                <NavLink to='/' className="btn btn-ghost normal-case text-xl">
                    <div className='flex flex-col justify-center items-center'>
                        <img className='w-1/2' src='https://i.ibb.co/SXQgrk2/sitelogo.png' alt='logo' />
                        <p className='logo-text'>SharePlate</p>
                    </div>
                </NavLink>
                <ul className="menu menu-horizontal px-1">
                    <li className='mx-4'><NavLink className='text-[1rem]' to='/manage'>Manage My Foods</NavLink></li>
                    <li className='mx-4'><NavLink className='text-[1rem]' to='/myfood'>My Food Request</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user &&
                    <div className="avatar mx-4">
                        <div className="w-12 mask mask-squircle">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                }
                {
                    user ? <button onClick={handleLogOut} className="btn">Log Out</button> : <NavLink to='/login' className="btn">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;