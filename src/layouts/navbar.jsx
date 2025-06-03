import React, { useEffect, useState } from 'react';
import images from '../constant/images';
import { ICONS } from "../constant/icons";
import FacebookIcon from '../assets/icons/facebook';
import TwitterIcon from '../assets/icons/twitter';
import PinterestIcon from '../assets/icons/pinterest';
import GoogleIcon from '../assets/icons/google';
import InstagramIcon from '../assets/icons/instagram';
import UserIcon from '../assets/icons/user';

const CartIcon = ICONS.cart;


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handlScroll = () => {
            const topBarHeight = document.querySelector(".top-bar")?.offsetHeight || 50;
            if (window.scrollY > topBarHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handlScroll);
        return () => window.removeEventListener("scroll", handlScroll);

    }, [])
    return (
        <>

            {!isScrolled && (
                <div className="top-bar">
                    <div className="top-content flex align-items-center justify-between px-6 py-2 bg-[#f5f5f5]">
                        <div className='flex align-items-center gap-4 pt-1 '>
                            <FacebookIcon className="w-4 h-4 text-gray-500 hover:text-[#e65540]" />
                            <TwitterIcon className="w-4 h-4 text-gray-500 hover:text-[#e65540]" />
                            <PinterestIcon className="w-4 h-4 text-gray-500 hover:text-[#e65540]" />
                            <GoogleIcon className="w-4 h-4 text-gray-500 hover:text-[#e65540]" />
                            <InstagramIcon className="w-4 h-4 text-gray-500 hover:text-[#e65540]" />

                        </div>
                        <span className='text-gray-500'>Free shipping for standard order over $100</span>
                        <span className='text-gray-500'>fashe@example.com</span>
                    </div>
                </div>
            )
            }
            <header className={`flex items-center justify-between p-6 z-[1000] transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 w-full shadow-md bg-white' : ''}`} >
                <div className="logo"><img src={images.logo} alt="" /></div>
                <nav className="nav flex align-items-center gap-9 justify-between">
                    <a className='hover:text-[#e65540]' href="/">Home</a>
                    <a className='hover:text-[#e65540]' href="/">Shop</a>
                    <a className='hover:text-[#e65540]' href="/">Sale</a>
                    <a className='hover:text-[#e65540]' href="/">Features</a>
                    <a className='hover:text-[#e65540]' href="/">Blog</a>
                    <a className='hover:text-[#e65540]' href="/">About</a>
                    <a className='hover:text-[#e65540]' href="/">Contact</a>
                </nav>
                <div className='icons flex align-items-center gap-3'>
                    <UserIcon className="w-6 h-6 text-gray-600 hover:text-[#e65540]" />
                    <div className="relative">
                        <CartIcon className="w-6 h-6 text-gray-600 hover:text-[#e65540]" />
                        <span className="absolute -top-0 -right-0 bg-red-600 text-white text-xs px-1 rounded-full"></span>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Navbar;
