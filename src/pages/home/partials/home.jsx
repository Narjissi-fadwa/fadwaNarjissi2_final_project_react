import React, { useEffect } from 'react';
import { Carousel } from 'flowbite';
import images from '../../../constant/images';
import { motion } from "framer-motion";

const Home = () => {
    useEffect(() => {
        const carouselElement = document.getElementById('default-carousel');
        const carousel = new Carousel(carouselElement);
    }, []);
    return (
        <>
            <div id="default-carousel" className="relative w-full" data-carousel="static">

                <div className="relative overflow-hidden rounded-lg md:h-[35rem]">

                    <div className="duration-300 ease-in-out absolute inset-0 transition-all transform translate-x-0 text-center flex justify-center align-center align-content-center align-self-center flex-col " data-carousel-item=""
                        style={{ backgroundImage: `url(${images.carousel1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='flex justify-center align-center align-content-center align-self-center flex-col gap-3'>
                            <span className='text-white font-bold mb-3 '>Women collection 2025</span>
                            <h1 className='text-white font-bold text-5xl mb-8'>NEW ARRIVALS </h1>
                            <motion.button
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="bg-white w-fit text-black rounded-4xl mx-auto px-14 py-3"
                            >
                                SHOP NOW
                            </motion.button>
                        </div>
                    </div>

                    <div className="duration-300 ease-in-out absolute inset-0 transition-all transform translate-x-0 text-center flex justify-center align-center align-content-center align-self-center flex-col" data-carousel-item=""
                        style={{ backgroundImage: `url(${images.carousel2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='flex justify-center align-center align-content-center align-self-center flex-col gap-3'>
                            <span className='text-white font-bold mb-3 '>Women collection 2025</span>
                            <h1 className='text-white font-bold text-5xl mb-8'>NEW ARRIVALS </h1>
                            <motion.button
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="bg-white w-fit text-black rounded-4xl mx-auto px-14 py-3"
                            >
                                SHOP NOW
                            </motion.button>
                        </div>
                    </div>

                    <div className="duration-300 ease-in-out absolute inset-0 transition-all transform translate-x-0 text-center flex justify-center align-center align-content-center align-self-center flex-col" data-carousel-item=""
                        style={{ backgroundImage: `url(${images.carousel3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='flex justify-center align-center align-content-center align-self-center flex-col gap-3'>
                            <span className='text-white font-bold mb-3 '>Women collection 2025</span>
                            <h1 className='text-white font-bold text-5xl mb-8'>NEW ARRIVALS </h1>
                            <motion.button
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="bg-white w-fit text-black rounded-4xl mx-auto px-14 py-3"
                            >
                                SHOP NOW
                            </motion.button>
                        </div>
                    </div>
                </div>

                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-gray-800/30 dark:group-hover:bg-[#e65540]/60">
                        <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-gray-800/30 dark:group-hover:bg-[#e65540]/60">
                        <svg className="w-2 h-2 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </>
    );
};

export default Home;