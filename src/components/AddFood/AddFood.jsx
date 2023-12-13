import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import PageTitle from "../PageTitle";
import { useTheme } from "../../hooks/ThemeContext";
const AddFood = () => {
    const { darkMode } = useTheme();
    const { user } = useContext(AuthContext);
    const [status, setStatus] = useState('');
    const handleReginForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const food_name = form.name.value;
        const food_image = form.photoURL.value;
        const donator_image = form.donatorImage.value;
        const donator = form.donator.value;
        const donator_email = form.donatorMail.value;
        const quantity = parseInt(form.quantity.value, 10);
        const expire_date = form.date.value;
        const pickup_location = form.location.value;
        const expire_time = parseInt(form.time.value);
        const additional_notes = form.note.value;
        const status = form.status.value;


        const newFood = { food_name, food_image, donator_image, donator, donator_email, quantity, expire_date, pickup_location, expire_time, additional_notes, status }


        fetch('https://community-food-sharing-server-ruddy.vercel.app/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Successfluy added to the server!');
                }
            })
            .catch(err =>{
                console.log(err.message)
            })

    }
    return (
        <div className="relative overflow-hidden">
            <PageTitle title='SharePlate | Add Food'></PageTitle>
            <div className="mx-auto max-w-screen-md px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
                <div className="w-full md:w-1/2 mx-auto">
                    <h1 data-aos="zoom-in-down" className="text-3xl font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
                       <span style={{ color: darkMode ? 'white' : '#252525' }}>Be a Food Hero: </span>  <span className="text-[tomato]">Add Your Extra Food Here</span>
                    </h1>
                    <form onSubmit={handleReginForm}>
                        <div className="mb-4" data-aos="zoom-in-down">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Food Name</span></label>
                            <input type="text" name="name" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-indigo-600 focus:ring-indigo-600 sm:p-4 " placeholder="Food Name" required />
                        </div>
                        <div className="mb-4" data-aos="zoom-in-down">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Food Image</span></label>
                            <input type="text" name="photoURL" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-indigo-600 focus:ring-indigo-600 sm:p-4 " placeholder="Food Image" required />
                        </div>
                        <div className="mb-4" data-aos="zoom-in-down">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Quantity</span></label>
                            <input type="number" name="quantity" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-indigo-600 focus:ring-indigo-600 sm:p-4 " placeholder="Quantity" required />
                        </div>
                        <div className="mb-4" data-aos="zoom-in-down">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Pickup Location</span></label>
                            <input type="text" name="location" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-indigo-600 focus:ring-indigo-600 sm:p-4 " placeholder="Pickup Location" required />
                        </div>
                        <div className="mb-4" data-aos="zoom-in-down">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Expire Date</span></label>
                            <input type="date" name="date" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-indigo-600 focus:ring-indigo-600 sm:p-4 " />
                        </div>
                        <div className="mb-4" data-aos="zoom-in-down">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Expire Time</span></label>
                            <input type="number" name="time" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-indigo-600 focus:ring-indigo-600 sm:p-4 " placeholder="Expire Time" required />
                        </div>
                        <div className="mb-4" data-aos="zoom-in-down">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Additional Notes</span></label>
                            <input type="text" name="note" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-indigo-600 focus:ring-indigo-600 sm:p-4 " placeholder="Additional Notes" required />
                        </div>
                        <div className="mb-4" data-aos="zoom-in-down">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Donator Image</span></label>
                            <input type="text" name="donatorImage" value={user?.photoURL} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-indigo-600 focus:ring-indigo-600 sm:p-4 " readOnly />
                        </div>
                        <div className="mb-4" data-aos="zoom-in-down">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Donator Name</span></label>
                            <input type="text" name="donator" value={user?.displayName} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-indigo-60000 focus:ring-indigo-600 sm:p-4 " readOnly />
                        </div>
                        <div className="mb-4" data-aos="zoom-in-down">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Donator Email</span></label>
                            <input type="text" name="donatorMail" value={user?.email} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-indigo-600 focus:ring-indigo-600 sm:p-4 " readOnly />
                        </div>
                        <div className="mb-4" data-aos="zoom-in-down">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Status</span></label>
                            <select name="status" value={status} onChange={(e) => setStatus(e.target.value)}  className="py-3 px-4 block w-1/2 border-gray-200 rounded-md text-sm focus:border-indigo-600 focus:ring-indigo-600 sm:p-4">
                                <option value="available">Available</option>
                                <option value="unavailable">Unavailable</option>
                            </select>
                        </div>
                        <div className="grid">
                            <button type="submit" data-aos="zoom-in-down" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-6000000 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4">Add Food</button>
                        </div>
                    </form>
                </div>
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
        </div>

    )
};

export default AddFood;