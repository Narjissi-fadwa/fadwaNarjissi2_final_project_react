import React from 'react';
import FacebookIcon from '../assets/icons/facebook';
import TwitterIcon from '../assets/icons/twitter';
import PinterestIcon from '../assets/icons/pinterest';
import GoogleIcon from '../assets/icons/google';
import InstagramIcon from '../assets/icons/instagram';
import UserIcon from '../assets/icons/user';

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-100 text-gray-700 text-sm">
                <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                    <div>
                        <h4 className="text-lg font-bold mb-4">GET IN TOUCH</h4>
                        <p className="mb-4">
                            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                        </p>
                        <div className="flex space-x-4 text-gray-600 text-xl">
                            <a href=""><FacebookIcon className="w-4 h-4 text-gray-500 hover:text-[#e65540]" /></a>
                            <a href=""><TwitterIcon className="w-4 h-4 text-gray-500 hover:text-[#e65540]" /></a>
                            <a href=""><PinterestIcon className="w-4 h-4 text-gray-500 hover:text-[#e65540]" /></a>
                            <a href=""><GoogleIcon className="w-4 h-4 text-gray-500 hover:text-[#e65540]" /></a>
                            <a href=""><InstagramIcon className="w-4 h-4 text-gray-500 hover:text-[#e65540]" /></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">CATEGORIES</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-[#e65540]">Men</a></li>
                            <li><a href="#" className="hover:text-[#e65540]">Women</a></li>
                            <li><a href="#" className="hover:text-[#e65540]">Dresses</a></li>
                            <li><a href="#" className="hover:text-[#e65540]">Sunglasses</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">LINKS</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-[#e65540]">Search</a></li>
                            <li><a href="#" className="hover:text-[#e65540]">About Us</a></li>
                            <li><a href="#" className="hover:text-[#e65540]">Contact Us</a></li>
                            <li><a href="#" className="hover:text-[#e65540]">Returns</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">HELP</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-[#e65540]">Track Order</a></li>
                            <li><a href="#" className="hover:text-[#e65540]">Returns</a></li>
                            <li><a href="#" className="hover:text-[#e65540]">Shipping</a></li>
                            <li><a href="#" className="hover:text-[#e65540]">FAQs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">NEWSLETTER</h4>
                        <input type="email" placeholder="Email Address" className="border-b border-gray-400 focus:outline-none bg-transparent w-full py-1 mb-4"/>
                        <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-[#e65540] transition-all">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
                <div className="text-center py-6 border-t border-gray-200 text-xs text-gray-500">
                    © 2022 <span className="text-black font-semibold">Shopify Theme Developed by MassTechnologist</span>. All rights reserved.
                </div>
            </footer>
        </>
    );
};

export default Footer;
