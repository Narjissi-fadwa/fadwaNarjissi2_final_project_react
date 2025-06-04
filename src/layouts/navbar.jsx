import React, { useEffect, useState } from 'react';
import images from '../constant/images';
import { ICONS } from "../constant/icons";
import FacebookIcon from '../assets/icons/facebook';
import TwitterIcon from '../assets/icons/twitter';
import PinterestIcon from '../assets/icons/pinterest';
import GoogleIcon from '../assets/icons/google';
import InstagramIcon from '../assets/icons/instagram';
import UserIcon from '../assets/icons/user';
import { Link } from 'react-router-dom';
import { useCart } from '../context';

const CartIcon = ICONS.cart;

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartItems } = useCart(); 
    const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0); 

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
    }, []);

    return (
        <>
            {!isScrolled && (
                <div className="top-bar hidden md:block">
                    <div className="top-content flex items-center justify-between px-6 py-2 bg-[#f5f5f5]">
                        <div className='flex items-center gap-4 pt-1'>
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
            )}

            <header className={`flex items-center justify-between p-6 z-[1000] transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 w-full shadow-md bg-white' : ''}`}>
                <div className="logo"><img src={images.logo} alt="" /></div>
                <nav className="nav hidden md:flex items-center gap-9 justify-between">
                    <a className='hover:underline' href="/">Home</a>
                    <Link to='/Shop' className='hover:underline'>Shop</Link>
                    <a className='hover:underline' href="/">Sale</a>
                    <a className='hover:underline' href="/">Features</a>
                    <a className='hover:underline' href="/">Blog</a>
                    <Link to='/About' className='hover:underline'>About</Link>
                    <Link to='/Contact' className='hover:underline'>Contact</Link>
                </nav>
                <div className='icons flex items-center gap-3'>
                    <UserIcon className="w-6 h-6 text-gray-600 hover:text-[#e65540]" />
                    <Link to='/ShoppingCart' className="relative">
            <CartIcon className="w-6 h-6 text-gray-600 hover:text-[#e65540]" />
            {itemCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                    {itemCount}
                </span>
            )}
        </Link>
                </div>
                <div className="md:hidden flex items-center gap-4">
                    <button className="text-gray-600 hover:text-[#e65540]" onClick={() => setMenuOpen(true)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

            </header>
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-[999]" onClick={() => setMenuOpen(false)}>
                    <div className="w-64 bg-white h-full shadow-lg p-6" onClick={e => e.stopPropagation()}>
                        <button className="mb-4 text-gray-600 hover:text-[#e65540]" onClick={() => setMenuOpen(false)}>
                            ✕ Close
                        </button>
                        <nav className="flex flex-col gap-4 text-gray-700">
                            <a className='hover:underline' href="/">Home</a>
                            <Link to='/Shop' className='hover:underline'>Shop</Link>
                            <a className='hover:underline' href="/">Sale</a>
                            <a className='hover:underline' href="/">Features</a>
                            <a className='hover:underline' href="/">Blog</a>
                            <Link to='/About' className='hover:underline'>About</Link>
                            <Link to='/Contact' className='hover:underline'>Contact</Link>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
