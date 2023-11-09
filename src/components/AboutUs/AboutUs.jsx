import PageTitle from "../PageTitle";


const AboutUs = () => {
    return (
        <section className="my-8">
            <div
                className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
            >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                    >
                        <img
                            alt="Sharing Food"
                            src="https://i.ibb.co/HTxXshk/pexels-fauxels-3184188.jpg"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl mb-4">Our Story: Sharing the Goodness</h2>

                        <div className="mb-4">
                            <h3 className="text-[tomato]">About Us</h3>
                            <p className=" text-gray-600">
                                Welcome to [Your Community Name], a passionate group of individuals committed to ending food waste and ensuring that no one goes to bed hungry. Our journey began with a simple idea – to connect surplus food with those who need it the most.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-[tomato]">Our Mission</h3>
                            <p className=" text-gray-600">
                                At [Your Community Name], we believe that every plate of food shared is a step towards a more sustainable and compassionate world. Our mission is to create a community where everyone can contribute to reducing food waste and providing nourishment to those in need. We aim to foster a sense of togetherness, one meal at a time.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-[tomato]">What We Do</h3>
                            <p className=" text-gray-600">
                                We provide a platform for individuals, local businesses, and food enthusiasts to share their surplus food with those facing food insecurity. Our user-friendly website and mobile app make it easy for anyone to create food donation listings, and for recipients to find and collect food donations in their area.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-[tomato]">Join Us</h3>
                            <p className=" text-gray-600">
                                Whether you have extra food to share or you&aposre looking for a meal, we invite you to join our growing community. Together, we can make a difference in the lives of many and contribute to a more sustainable and compassionate world.
                            </p>
                        </div>
                        <p>Thank you for being a part of our journey. Together, we can share the goodness, one plate at a time.</p>
                        <a
                            href="#"
                            className="mt-8 inline-block rounded bg-indigo-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 "
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;