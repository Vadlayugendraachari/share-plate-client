import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import "./availableFood.css";
const AvailableFood = ({ food }) => {
    const { _id, food_name, food_image, donator, donator_image, additional_notes, expire_date, expire_time, quantity
        , pickup_location } = food;

    const { user } = useContext(AuthContext);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div>
                    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl" id="customCss">
                        <div className="h-52 flex flex-col justify-center items-center rounded-xl">
                            <img className="rounded-t-xl" src={food_image} />
                        </div>
                        <div className="p-4 md:p-6">
                            <span className="block mb-1 text-xs font-semibold uppercase text-[tomato]">
                                {food_name}
                            </span>
                            <div>
                                <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full my-1" src={donator_image} alt="donator" />
                                <h3 className="text-xl font-semibold text-dark">
                                    {donator}
                                </h3>
                            </div>
                            <p>
                                <span className="text-[tomato]">Food Quantity :</span> {quantity}
                            </p>
                            <p>
                                <span className="text-[tomato]"> Pickup Location : </span>{pickup_location} h
                            </p>
                            <p>
                                <span className="text-[tomato]"> Expire Time : </span>Will be expire in {expire_time} h
                            </p>
                            <p>
                                <span className="text-[tomato]"> Expire Date : </span>{expire_date}
                            </p>
                            <p className=" text-black">
                                <span className="text-[tomato]">Note : </span> {additional_notes}
                            </p>
                        </div>

                        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                            {
                                user ?
                                    <Link to={`/foods/details/${_id}`} className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-[5rem] rounded-br-lg font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 " href="#">
                                        View Details
                                    </Link>
                                    :
                                    <Link to='/login' className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-[5rem] rounded-br-lg font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 " href="#">
                                        View Details
                                    </Link>
                            }
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AvailableFood;