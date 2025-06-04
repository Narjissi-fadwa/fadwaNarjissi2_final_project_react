import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-md shadow">
                    <h2 className="text-xl font-semibold mb-2">New Customer</h2>
                    <p className="font-medium">Register Account</p>
                    <p className="text-sm mt-2">
                        By creating an account you will be able to shop faster, be up to date on an order's status,
                        and keep track of the orders you have previously made.
                    </p>
                    <button className="mt-4 inline-block bg-black text-white px-4 py-2 rounded hover:bg-[#e65540]">
                        Continue
                    </button>
                </div>

                <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-md shadow">
                    <h2 className="text-xl font-semibold mb-2">Returning Customer</h2>
                    <p className="font-medium mb-4">I am a returning customer</p>

                        <form className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">
                                    Email
                                </label>
                                <input type="text" id="email" name="customer[email]" placeholder="Email" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none"/>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium mb-1">
                                    Password
                                </label>
                                <input type="password" id="password" name="customer[password]" placeholder="Password" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none"/>
                                <button type="button" className="text-black text-sm mt-1 hover:underline" >
                                    Forgot your password?
                                </button>
                            </div>

                            <div className="flex items-center gap-4">
                                <button type="button" className="bg-black text-white px-5 py-2 rounded hover:bg-[#e65540]">
                                    Sign In
                                </button>
                                <Link to="/" className="text-[#e65540] hover:underline">
                                    Return to Store
                                </Link>
                            </div>
                        </form> 
                </div>
            </div>
        </div>
    );
};

export default User;
