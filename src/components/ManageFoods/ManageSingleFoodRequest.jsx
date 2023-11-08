import { useLoaderData } from "react-router-dom";

const ManageSingleFoodRequest = () => {

    const singleReuestedFood = useLoaderData();

    console.log(singleReuestedFood)

    return (
        <div className="flow-root rounded-lg border border-gray-300 py-3 shadow-sm max-w-6xl mx-auto my-8">
            <dl className="-my-3 divide-y divide-gray-300 text-sm">
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Requester Image</dt>
                    <dd className="text-gray-700 sm:col-span-2"><img src={singleReuestedFood.user_image}/></dd>
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
             
                </div>
            </dl>
        </div>
    );
};

export default ManageSingleFoodRequest;
