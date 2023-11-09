import axios from "axios";
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const ManageSingleFoodRequest = () => {

    const singleReuestedFood = useLoaderData();
    console.log(singleReuestedFood.status)
    console.log(singleReuestedFood)

    const updateStatus = { status: 'unavailable' }
    const handleStatus = (e) => {
        console.log(typeof (e))
        axios.put(`https://community-food-sharing-server-ruddy.vercel.app/updatefoodstatus/${e}`, updateStatus)
            .then(res => {
                toast.success('Status updated successfluy!');
            })
            .catch(err => {
                console.log(err.messsage)
            })
    }
    return (
        <div className="flow-root rounded-lg border border-gray-300 py-3 shadow-sm max-w-6xl mx-auto my-8">
            <dl className="-my-3 divide-y divide-gray-300 text-sm">
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Requester Image</dt>
                    <dd className="text-gray-700 sm:col-span-2"><img src={singleReuestedFood.user_image} /></dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Requester Name</dt>
                    <dd className="text-gray-700 sm:col-span-2">{singleReuestedFood.user_name}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Requester Email</dt>
                    <dd className="text-gray-700 sm:col-span-2">{singleReuestedFood.user_email}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Request Date</dt>
                    <dd className="text-gray-700 sm:col-span-2">{singleReuestedFood.requested_date}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                
                {
                    singleReuestedFood.status === 'unavalable' || singleReuestedFood.status === undefined ?  
                    <div><button disabled className="btn bg-indigo-500 hover:bg-indigo-700 text-white">Delevered</button> <p className="text-[red]">This food is already delevered to someone.</p></div>
                    : 
                    <button onClick={() => handleStatus(singleReuestedFood.food_id)} className="btn bg-indigo-500 hover:bg-indigo-700 text-white">Pending</button>
                }
              
                   
                </div>
            </dl>
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
    );
};

export default ManageSingleFoodRequest;
