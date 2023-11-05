

const FeatureFood = ({ feafood }) => {
    console.log(feafood)
    const { _id, food_name, food_image, donator, donator_image, additional_notes, expire_date, expire_time, food_quantity
        , pickup_location } = feafood;
    return (
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div>
                <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
                    <div className=" flex flex-col justify-center items-center rounded-t-xl">
                        <img className="rounded-t-xl" src={food_image} alt="food image" />
                    </div>
                    <div className="p-4 md:p-6">
                        <span className="block mb-1 text-xs font-semibold uppercase text-[#35ff08]">
                            {food_name}
                        </span>
                        <div>
                            <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full my-1" src={donator_image} alt="donator" />
                            <h3 className="text-xl font-semibold text-dark">
                                {donator}
                            </h3>
                        </div>
                        <p>
                            <span className="text-gray-500">Food Quantity :</span> {food_quantity}
                        </p>
                        <p>
                         <span  className="text-gray-500"> Expire Time : </span>Will be expire in {expire_time} h
                        </p>
                        <p>
                           <span  className="text-gray-500"> Expire Date : </span>{expire_date}
                        </p>
                        <p className="mt-3 text-black">
                           <span  className="text-gray-500">Note : </span> {additional_notes}
                        </p>
                    </div>
                    <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
                        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 " href="#">
                            View sample
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FeatureFood;