import React from 'react';
import { useCart } from '../../../../context';


const ShoppingCart = () => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between items-center border p-4 rounded">
                            <div className="flex items-center gap-4">
                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                                <div>
                                    <h2 className="font-semibold">{item.name}</h2>
                                    <p>${item.price.toFixed(2)} x {item.quantity}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-600 hover:underline"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
