import React, { useEffect, useState } from 'react';
import images from '../../../constant/images';
import productJson from '../../../json/product.json';

const filterCategory = [
    { label: 'All', key: 'all' },
    { label: 'Best Seller (8 items)', key: 'bestSeller' },
    { label: 'Featured (8 items)', key: 'featured' },
];

const filterSize = ['all', 'L', 'M', 'S', 'XL'];
const filterPrice = [
    { label: 'All', value: 'all' },
    { label: '$0 - $20', value: '0-20' },
    { label: '$20 - $40', value: '20-40' },
];

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSize, setSelectedSize] = useState('all');
    const [selectedPrice, setSelectedPrice] = useState('all');
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const preparedProducts = productJson.map(product => ({
            ...product,
            image: images[product.image],
        }));
        setAllProducts(preparedProducts);
    }, []);

    const filterProducts = () => {
        return allProducts.filter(product => {
            const category = selectedCategory === 'all' || product[selectedCategory];
            const size = selectedSize === 'all' || product[selectedSize] === true;

            let price = true;
            if (selectedPrice === '0-20') {
                price = product.price >= 0 && product.price <= 20;
            } else if (selectedPrice === '20-40') {
                price = product.price > 20 && product.price <= 40;
            }

            return category && size && price;
        });
    };

    const visibleProducts = filterProducts();

    return (
        <div>
            <div
                className="pt-30 pb-20 flex-col w-screen height-[200px] min-height-[200px] text-center"
                style={{ backgroundImage: `url(${images.banner})`, backgroundSize: 'cover', backgroundPosition: 'center 0', backgroundRepeat: 'no-repeat', }}>
                <h2 className="text-5xl text-white font-bold">Products</h2>
            </div>

            <div className="max-w-[1200px] mx-auto py-10 px-4 sm:px-8 flex flex-col lg:flex-row gap-10">
                <div className="flex flex-col min-w-[220px] w-full lg:w-auto">
                    <div className="mb-10">
                        <h1 className="text-center font-bold text-3xl tracking-wide mb-6 uppercase">
                            Categories
                        </h1>
                        <div className="flex flex-col gap-3 px-2 sm:px-0">
                            {filterCategory.map(category => (
                                <a key={category.key} href="#" onClick={e => { e.preventDefault(); setSelectedCategory(category.key); }}
                                    className={`sm:px-2 px-1 sm:text-[17px] text-[13px] font-normal transition-colors duration-200 no-underline ${ selectedCategory === category.key ? 'text-black font-bold' : 'text-[#2222228d]'  }`}>
                                    {category.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mb-10">
                        <h1 className="text-center font-bold text-3xl tracking-wide mb-6 uppercase">
                            Size
                        </h1>
                        <select className="w-full border px-3 py-2 rounded text-sm text-gray-700" value={selectedSize} onChange={e => setSelectedSize(e.target.value)} >
                            {filterSize.map(size => (
                                <option key={size} value={size}>
                                    {size === 'all' ? 'All Sizes' : size}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <h1 className="text-center font-bold text-3xl tracking-wide mb-6 uppercase">
                            Price
                        </h1>
                        <div className="flex flex-col gap-2">
                            {filterPrice.map(price => (
                                <label key={price.value} className="text-sm text-gray-700">
                                    <input type="radio" name="price" value={price.value} checked={selectedPrice === price.value} onChange={e => setSelectedPrice(e.target.value)} className="mr-2" />
                                    {price.label}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                    {visibleProducts.map(item => (
                        <div key={item.id} className="w-full">
                            <div className="relative w-full h-[300px] overflow-hidden group">
                                {item.sale && (
                                    <span className="absolute top-3 left-3 bg-[#e65540] text-white text-[13px] font-medium rounded px-3 py-0.5 z-10">
                                        Sale
                                    </span>
                                )}
                                <img  src={item.image} alt={item.name} className="w-full h-full object-cover block"/>
                                <div className="absolute inset-0 flex justify-center items-center bg-black/30 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition duration-300">
                                    <button className="bg-white absolute bottom-6 text-black px-6 py-2 rounded-2xl hover:bg-[#e65540] hover:text-white">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div className="text-left pl-1">
                                <div className="text-[15px] text-[#222] mb-0.5">
                                    {item.name}
                                </div>
                                <div className={`text-[15px] font-normal ${item.sale ? 'text-[#e65540]' : 'text-[#222]' }`} >
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
        </div>
    );
};

export default Shop;
