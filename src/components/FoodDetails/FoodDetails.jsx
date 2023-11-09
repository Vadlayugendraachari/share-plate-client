import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion, AnimatePresence } from "framer-motion"
import toast, { Toaster } from 'react-hot-toast';
const FoodDetails = () => {

    const foodDetails = useLoaderData();
    const { user } = useContext(AuthContext);
    const currentDay = new Date();
    const currentDate = `${currentDay.getDate()}`.padStart(2, '0');
    const currentMonth = `${currentDay.getMonth() + 1}`.padStart(2, '0');
    const currentYear = currentDay.getFullYear();
    const requestedDate = `${currentYear}-${currentMonth}-${currentDate}`
    console.log(user)

    console.log(foodDetails)
    const handleRequest = (e) => {
        e.preventDefault();
        const form = e.target;
        const food_name = form.foodName.value;
        const food_image = form.foodImage.value;
        const food_id = form.foodId.value;
        const donator_email = form.donatorEmail.value;
        const donator = form.donator.value;
        const user_email = form.userEmail.value;
        const user_name = form.userName.value;
        const user_image = form.userPhoto.value;
        const requested_date = form.requesteddate.value;
        const expire_date = form.expireDate.value;
        const pickup_location = form.pickPoint.value;
        const additional_notes = form.note.value;
        const donation_amount = parseInt(form.donationMoney.value);

        const requested_food = {
            food_image, food_name, food_id, donator_email, donator, user_image, user_name, user_email, requested_date
            , pickup_location, expire_date, additional_notes, donation_amount
        };

        fetch('http://localhost:2003/requestedfood', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(requested_food)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Your requested was successfl!');
                }
            })


    }



    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm my-8 max-w-6xl mx-auto">
                <h1 className="text-center my-8 text-3xl font-bold underline">Food Details</h1>
                <motion.dl
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                >
                    <h2>Donor Information</h2>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Donator Name</dt>
                        <dd className="text-gray-700 sm:col-span-2">{foodDetails?.donator}</dd>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Pickup Location</dt>
                        <dd className="text-gray-700 sm:col-span-2">{foodDetails?.pickup_location}</dd>
                    </div>
                </motion.dl>
                <motion.dl
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    className="-my-3 divide-y divide-gray-100 text-sm">
                    <h2>Food Information</h2>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Food Image</dt>
                        <dd className="text-gray-700 sm:col-span-2"><img className="w-1/2" src={foodDetails?.food_image} /></dd>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Food Name</dt>
                        <dd className="text-gray-700 sm:col-span-2">{foodDetails?.food_name}</dd>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Food Id</dt>
                        <dd className="text-gray-700 sm:col-span-2">{foodDetails?._id}</dd>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Donator Name</dt>
                        <dd className="text-gray-700 sm:col-span-2">{foodDetails?.donator}</dd>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Donator Email</dt>
                        <dd className="text-gray-700 sm:col-span-2">{foodDetails?.donator_email}</dd>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Food Quantity</dt>
                        <dd className="text-gray-700 sm:col-span-2">{foodDetails?.quantity}</dd>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Expire Date</dt>
                        <dd className="text-gray-700 sm:col-span-2">{foodDetails?.expire_date}</dd>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Expire Time</dt>
                        <dd className="text-gray-700 sm:col-span-2">{foodDetails?.expire_time}</dd>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Notes</dt>
                        <dd className="text-gray-700 sm:col-span-2">
                            {foodDetails?.additional_notes}
                        </dd>
                    </div>
                    <div className="text-center">
                        <button type="button" className="py-3 my-4 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm " data-hs-overlay="#hs-modal-signin">
                            Request
                        </button>
                    </div>

                    <div id="hs-modal-signin" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
                                <div className="p-4 sm:p-7">
                                    <div className="mt-5">
                                        <form onSubmit={handleRequest}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                                <div>
                                                    <label htmlFor="food_name" className="block text-sm mb-2">Food Name</label>
                                                    <div className="relative">
                                                        <input type="text" name="foodName" value={foodDetails?.food_name} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="food_image" className="block text-sm mb-2">Food Image</label>
                                                    <div className="relative">
                                                        <input type="text" name="foodImage" value={foodDetails?.food_image} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="food+_id" className="block text-sm mb-2">Food ID</label>
                                                    <div className="relative">
                                                        <input type="text" name="foodId" value={foodDetails?._id} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="donator" className="block text-sm mb-2">Donator Name</label>
                                                    <div className="relative">
                                                        <input type="text" name="donator" value={foodDetails?.donator} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="donatorEmail" className="block text-sm mb-2">Donator Email</label>
                                                    <div className="relative">
                                                        <input type="email" name="donatorEmail" value={foodDetails?.donator_email} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="userPhoto" className="block text-sm mb-2">Your Photo</label>
                                                    <div className="relative">
                                                        <input type="text" name="userPhoto" value={user?.photoURL} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="userName" className="block text-sm mb-2">Your Name</label>
                                                    <div className="relative">
                                                        <input type="text" name="userName" value={user?.displayName} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="userEmail" className="block text-sm mb-2">Your Email</label>
                                                    <div className="relative">
                                                        <input type="text" name="userEmail" value={user?.email} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="requesteddate" className="block text-sm mb-2">Requested Date</label>
                                                    <div className="relative">
                                                        <input type="date" name="requesteddate" value={requestedDate} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="pickPoint" className="block text-sm mb-2">Pickup Location</label>
                                                    <div className="relative">
                                                        <input type="text" name="pickPoint" value={foodDetails?.pickup_location} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="expireDate" className="block text-sm mb-2">Expire Date</label>
                                                    <div className="relative">
                                                        <input type="date" name="expireDate" value={foodDetails?.expire_date} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" readOnly />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="note" className="block text-sm mb-2">Additional Notes</label>
                                                    <div className="relative">
                                                        <input type="text" name="note" value={foodDetails?.additional_notes} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required aria-describedby="email-error" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="donationMoney" className="block text-sm mb-2">Donation Amount</label>
                                                    <div className="relative">
                                                        <input type="number" name="donationMoney" placeholder="0$" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm shadow-[#0000001A] shadow-md" required />
                                                    </div>
                                                </div>
                                                <button type="submit" className="py-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-60000 focus:ring-offset-2 transition-all text-sm">Request</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.dl>
            </motion.div>
            <button></button>
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

export default FoodDetails;