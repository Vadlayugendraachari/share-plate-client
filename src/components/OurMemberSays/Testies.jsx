import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testies.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const Testies = () => {
    return (
        <AnimatePresence>
            <motion.div className='max-w-6xl mx-auto my-12' data-aos="zoom-in-down">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-4'>
                    <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    >
                        <h2 className="text-3xl font-bold sm:text-4xl mb-4">Our Story: Sharing the Goodness</h2>
                        <p className='text-gray-600'>
                            Discover what our community members have to say about their food sharing experiences. From heartwarming stories to delicious culinary journeys, our members share their thoughts and experiences, showcasing the power of sharing a meal. Join us in this delightful food adventure, and become a part of our growing family. We're more than just a community; we&aposre a collection of shared moments, culinary passions, and lasting friendships.
                        </p>
                    </motion.div>
                    <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    >
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                            id="testSwipe"
                        >
                            <SwiperSlide className='testiSwiperSlide'>
                                <blockquote className="relative border-l-4 pl-4 sm:pl-6">
                                    <p className="text-gray-800 sm:text-xl dark:text-white"><em>
                                        I&aposve found a home for my secret family recipe! Sharing my beloved lasagna with fellow food enthusiasts is a pure joy.
                                    </em></p>

                                    <footer className="mt-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-base font-semibold text-white">Sarah Mitchell</div>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </SwiperSlide>
                            <SwiperSlide className='testiSwiperSlide'>
                                <blockquote className="relative border-l-4 pl-4 sm:pl-6">
                                    <p className="text-gray-800 sm:text-xl dark:text-white"><em>
                                        Being part of this community has opened up my taste buds to a world of flavors I never knew existed. I'm forever grateful for these culinary adventures.
                                    </em></p>

                                    <footer className="mt-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-base font-semibold text-white">John Reynolds</div>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </SwiperSlide>
                            <SwiperSlide className='testiSwiperSlide'>
                                <blockquote className="relative border-l-4 pl-4 sm:pl-6">
                                    <p className="text-gray-800 sm:text-xl dark:text-white"><em>
                                        What a fantastic way to connect with others over a love of food! The friendships I've made here are as delicious as the dishes we share.
                                    </em></p>

                                    <footer className="mt-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-base font-semibold text-white">Emily Turner</div>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </SwiperSlide>
                            <SwiperSlide className='testiSwiperSlide'>
                                <blockquote className="relative border-l-4 pl-4 sm:pl-6">
                                    <p className="text-gray-800 sm:text-xl dark:text-white"><em>
                                        As a passionate cook, this community has given me a platform to showcase my creations. The feedback and appreciation keep me inspired.
                                    </em></p>

                                    <footer className="mt-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-base font-semibold text-white">Michael Patel</div>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </SwiperSlide>
                        </Swiper>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Testies;