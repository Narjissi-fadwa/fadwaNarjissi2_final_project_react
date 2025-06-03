import React, { useEffect, useState } from 'react';
import { Carousel } from 'flowbite';
import images from '../../../constant/images';
import { motion } from "framer-motion";
import productJson from '../../../json/product.json';

const filters = [
    { label: 'All', key: 'all' },
    { label: 'Best Seller', key: 'bestSeller' },
    { label: 'Featured', key: 'featured' },
    { label: 'Discounted', key: 'sale' },
];

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const carouselElement = document.getElementById('default-carousel');
        if (carouselElement) { new Carousel(carouselElement); }

        const preparedProducts = productJson.map(product => ({
            ...product,
            image: images[product.image]
        }));
        setAllProducts(preparedProducts);
    }, []);

    const visibleProducts =
        selectedCategory === 'all'
            ? allProducts
            : allProducts.filter(product => product[selectedCategory]);

    return (
        <>
            <div id="default-carousel" className="relative w-full" data-carousel="static">
                <div className="relative overflow-hidden md:h-[35rem]">
                    {[images.carousel1, images.carousel2, images.carousel3].map((bg, index) => (
                        <div
                            key={index}
                            className="duration-300 ease-in-out absolute inset-0 transition-all transform translate-x-0 text-center flex justify-center items-center flex-col"
                            data-carousel-item=""
                            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            <div className='flex flex-col gap-3 items-center'>
                                <span className='text-white font-bold mb-3'>Women collection 2025</span>
                                <h1 className='text-white font-bold text-5xl mb-8'>NEW ARRIVALS</h1>
                                <motion.button
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="bg-white w-fit text-black rounded-4xl px-14 py-3"
                                >
                                    SHOP NOW
                                </motion.button>
                            </div>
                        </div>
                    ))}
                </div>

                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-gray-800/30 dark:group-hover:bg-[#e65540]/60">
                        <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-gray-800/30 dark:group-hover:bg-[#e65540]/60">
                        <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

            <div className='flex flex-row gap-8 py-10 px-36 justify-center'>
                <div className='flex flex-col gap-8'>
                    <div className="relative w-full h-[80vh] overflow-hidden">
                        <img src={images.banner02} alt="Dresses" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 shadow-md uppercase tracking-wider text-sm  hover:bg-[#e65540] hover:text-white">
                            DRESSES
                        </button>
                    </div>
                    <div className="relative w-full h-[40vh] overflow-hidden">
                        <img src={images.cards4} alt="SUNGLASSES" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 shadow-md uppercase tracking-wider text-sm  hover:bg-[#e65540] hover:text-white">
                            SUNGLASSES
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className="relative w-full h-[40vh] overflow-hidden">
                        <img src={images.cards2} alt="WATCHES" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 shadow-md uppercase tracking-wider text-sm  hover:bg-[#e65540] hover:text-white">
                            WATCHES
                        </button>
                    </div>
                    <div className="relative w-full h-[80vh] overflow-hidden">
                        <img src={images.banner07} alt="FOOTERWEAR" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 shadow-md uppercase tracking-wider text-sm  hover:bg-[#e65540] hover:text-white">
                            FOOTERWEAR
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className="relative w-full h-[80vh] overflow-hidden">
                        <img src={images.cards3} alt="BAGS" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 shadow-md uppercase tracking-wider text-sm hover:bg-[#e65540] hover:text-white">
                            BAGS
                        </button>
                    </div>
                    <div className="relative w-full h-[40vh] overflow-hidden">
                        <img src={images.cards6} alt="ACCESSORIES" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 shadow-md uppercase tracking-wider text-sm hover:bg-[#e65540] hover:text-white">
                            ACCESSORIES
                        </button>
                    </div>
                </div>


            </div>

            <div className="max-w-[1200px] mx-auto py-10 px-4 sm:px-8">
                <h1 className="text-center font-bold text-3xl tracking-wide mb-6 uppercase">FEATURED PRODUCTS</h1>
                <div className="flex justify-center sm:gap-8 gap-3 mb-10 overflow-x-auto whitespace-nowrap sm:whitespace-normal px-2 sm:px-0">
                    {filters.map((category) => (
                        <a
                            key={category.key}
                            href="#"
                            onClick={e => { e.preventDefault(); setSelectedCategory(category.key); }}
                            className={`sm:px-2 px-1 sm:text-[17px] text-[13px] font-normal transition-colors duration-200 no-underline ${selectedCategory === category.key ? 'text-black border-b-2 border-black' : 'text-[#222] border-b-0'}`}
                        >
                            {category.label}
                        </a>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {visibleProducts.map((item) => (
                        <div key={item.id} className="w-full">
                            <div className="relative w-full aspect-square mb-4">
                                {item.sale && (
                                    <span className="absolute top-3 left-3 bg-[#e65540] text-white text-[13px] font-medium rounded px-3 py-0.5 z-10">
                                        Sale
                                    </span>
                                )}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover block"
                                />
                            </div>
                            <div className="text-left pl-1">
                                <div className="text-[15px] text-[#222] mb-0.5">{item.name}</div>
                                <div className={`text-[15px] font-normal ${item.sale ? 'text-[#e65540]' : 'text-[#222]'}`}>
                                    {item.sale && (
                                        <span className="text-[#888] line-through mr-2">
                                            ${item.oldPrice?.toFixed(2)}
                                        </span>
                                    )}
                                    ${item.price.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
