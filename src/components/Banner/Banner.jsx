import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Banner.css'
import { NavLink } from 'react-router-dom';
const Banner = () => {

    const sliderBg1 = {
        backgroundImage: 'url(https://i.ibb.co/MSDcYfN/depositphotos-105682122-stock-photo-friends-eating-for-big-table.jpg)',
        backgroundSize: 'cover',
    };
    const sliderBg2 = {
        backgroundImage: 'url(https://i.ibb.co/yRpxpHz/kate-remmer-RZn4-Fz-NUCY-unsplash.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    const sliderBg3 = {
        backgroundImage: 'url(https://i.ibb.co/Q8dCmbQ/istockphoto-1302728677-2048x2048-result.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    const customBg = {
        background: 'rgba(71, 69, 69, 0.19)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(9.6px)',
        WebkitBackdropFilter: 'blur(9.6px)',
    }

    return (
        <AnimatePresence>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={sliderBg1}>
                        <div className="hero-overlay bg-[#0000007F]">
                            <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent" style={customBg}>
                                <motion.div
                                    initial={{ x: 400, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -400, opacity: 0 }}
                                    className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                                    <div className="max-w-3xl text-center mx-auto">
                                        <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                                            Embrace the Joy of Food Sharing with <span className='text-[#35ff08]'>SharePlate</span>
                                        </h1>
                                    </div>
                                    <div className="max-w-3xl text-center mx-auto">
                                        <p className="text-lg text-white">Welcome to <span className='text-[#35ff08]'><b>SharePlate</b></span>, where the joy of culinary sharing comes to life. Our community is a flavorful mosaic of cultures and stories, all united by the love of sharing food. Explore delectable recipes, culinary adventures, and heartfelt connections. Whether you&aposre an experienced chef or an eager cook, our platform is your canvas to share, discover, and connect with fellow food enthusiasts. Join us in celebrating generosity, deliciousness, and the beauty of sharing a meal.</p>
                                    </div>
                                    <div className="text-center">
                                        <NavLink to='/reg' className='btn btn-grad hover:bg-[#63ec44] '>
                                            Join Today
                                            <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </NavLink>
                                    </div>

                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={sliderBg2}>
                        <div className="hero-overlay bg-[#0000007F]">
                            <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent" style={customBg}>
                                <motion.div
                                    initial={{ x: 400, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -400, opacity: 0 }}
                                    className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                                    <div className="max-w-3xl text-center mx-auto">
                                        <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                                            Join Us in Making a Difference Through Food Donation
                                        </h1>
                                    </div>
                                    <div className="max-w-3xl text-center mx-auto">
                                        <p className="text-lg text-white">At <span className='text-[#35ff08]'>SharePlate</span>, we believe in the power of food to bring people together and make a positive impact. Join our mission to share not just meals, but also kindness and support. Together, we can make a difference in the lives of those in need. Whether it&aposs sharing surplus food, supporting local charities, or organizing food drives, every contribution matters. Help us create a world where no one goes hungry, one meal at a time.</p>
                                    </div>
                                    <div className="text-center">
                                        <NavLink to='/reg' className='btn btn-grad hover:bg-[#63ec44] '>
                                            Join Today
                                            <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </NavLink>
                                    </div>

                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={sliderBg3}>
                        <div className="hero-overlay bg-[#0000007F]">
                            <motion.div
                                initial={{ x: 400, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -400, opacity: 0 }}
                                className="bg-gradient-to-b from-violet-600/[.15] via-transparent" style={customBg}>
                                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                                    <div className="max-w-3xl text-center mx-auto">
                                        <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                                            Join Us in Reducing Food Waste
                                        </h1>
                                    </div>
                                    <div className="max-w-3xl text-center mx-auto">
                                        <p className="text-lg text-white">At <span className='text-[#35ff08]'>SharePlate</span>, we&aposre dedicated to combating food waste. Each day, tons of good food are discarded while others go hungry. Together, we can make a difference by sharing surplus food. Join our mission to reduce waste and nourish those in need. Let&aposs create a more sustainable world, one meal at a time.</p>
                                    </div>
                                    <div className="text-center">
                                        <NavLink to='/reg' className='btn btn-grad hover:bg-[#63ec44] '>
                                            Join Today
                                            <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </NavLink>
                                    </div>

                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </SwiperSlide>
            </Swiper>
        </AnimatePresence>
    );
};

export default Banner;