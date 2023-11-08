import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import Swal from "sweetalert2";
import PageTitle from "../PageTitle";
const AddFood = () => {
    const { user } = useContext(AuthContext);

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
   

        const newFood = { food_name, food_image, donator_image, donator, donator_email, quantity, expire_date, pickup_location, expire_time, additional_notes }


        fetch('https://community-food-sharing-server-ruddy.vercel.app/foods',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    Swal.fire(
                        'Congratulation!',
                        'Food added successfuly!',
                        'success'
                    )
                }
            })

    }
    return (
        <div className="relative overflow-hidden">
        <PageTitle title='SharePlate | Add Food'></PageTitle>
            <div className="mx-auto max-w-screen-md px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
                <div className="w-full md:w-1/2 mx-auto">
                    <h1 className="text-3xl text-black font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
                    Be a Food Hero:  <span className="text-[tomato]">Add Your Extra Food Here</span>
                    </h1>
                    <form onSubmit={handleReginForm}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Food Name</span></label>
                            <input type="text" name="name" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 "  placeholder="Food Name" required/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Food Image</span></label>
                            <input type="text" name="photoURL" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 " placeholder="Food Image" required/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Quantity</span></label>
                            <input type="number" name="quantity" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 " placeholder="Quantity" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Pickup Location</span></label>
                            <input type="text" name="location" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 " placeholder="Pickup Location" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Expire Date</span></label>
                            <input type="date" name="date" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 " />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Expire Time</span></label>
                            <input type="number" name="time" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 "placeholder="Expire Time" required/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Additional Notes</span></label>
                            <input type="text" name="note" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 " placeholder="Additional Notes" required/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Donator Image</span></label>
                            <input type="text" name="donatorImage" value={user?.photoURL} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 " readOnly />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Donator Name</span></label>
                            <input type="text" name="donator" value={user?.displayName} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 " readOnly />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-white"><span className="sr-only">Donator Email</span></label>
                            <input type="text" name="donatorMail" value={user?.email} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 " readOnly />
                        </div>
                        <div className="grid">
                            <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4">Add Food</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
};

export default AddFood;