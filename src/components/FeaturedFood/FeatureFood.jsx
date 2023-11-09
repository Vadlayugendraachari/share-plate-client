import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import './featureFood.css'

const FeatureFood = ({ feafood }) => {

    const { _id, food_name, food_image, donator, donator_image, additional_notes, expire_date, expire_time, quantity
        , pickup_location } = feafood;

    const { user } = useContext(AuthContext);

    return (
        <AnimatePresence>
            <div className="mx-auto bg-black h-fit rounded-2xl hover:shadow-none" id="customCss" data-aos="zoom-in-down">
                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                >
                    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-2xl">
                        <div className=" flex flex-col justify-center items-center">
                            <img className="rounded-t-2xl" src={food_image} alt="food image" />
                        </div>
                        <div className="px-8 pt-6">
                            <span className="block my-1 text-xs font-semibold uppercase text-[tomato]">
                                {food_name}
                            </span>
                            <div>
                                <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full my-1" src={donator_image} alt="donator" />
                                <h3 className="text-xl my-2 font-semibold text-dark">
                                    {donator}
                                </h3>
                            </div>
                            <p className="my-2">
                                <span className="text-[tomato] ">Food Quantity :</span> {quantity}
                            </p>
                            <p className="my-2">
                                <span className="text-[tomato] ">Pickup Location :</span> {pickup_location}
                            </p>
                            <p className="my-2">
                                <span className="text-[tomato] "> Expire Time : </span>Will be expire in {expire_time} h
                            </p>
                            <p className="my-2">
                                <span className="text-[tomato] "> Expire Date : </span>{expire_date}
                            </p>
                            <p className="my-2">
                                <span className="text-[tomato] ">Note : </span> {additional_notes}
                            </p>
                        </div>
                        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 rounded-br-[2rem]">
                            {
                                user ?
                                    <Link to={`/foods/details/${_id}`} className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-b-2xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 " href="#">
                                        View Details
                                    </Link>
                                    :
                                    <Link to='/login' className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-b-2xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 " href="#">
                                        View Details
                                    </Link>
                            }
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>

    );
};

export default FeatureFood;