import React from 'react';
import { useCart } from '../../../../context';
import images from '../../../../constant/images';


const ShoppingCart = () => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <div className="w-full mx-auto ">
            <div
                className="pt-30 pb-20 flex-col w-full height-[200px] min-height-[200px] text-center"
                style={{ backgroundImage: `url(${images.about})`, backgroundSize: 'cover', backgroundPosition: 'center 0', backgroundRepeat: 'no-repeat', }}>
                <h2 className="text-5xl text-white font-bold">Shopping cart</h2>
            </div>
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
