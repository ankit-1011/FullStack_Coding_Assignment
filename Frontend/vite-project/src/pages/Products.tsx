// ...existing code...
import { useEffect, useState } from 'react';
import type { Product } from '../types/product';
import { useCart } from '../context/cartContext';
import Promotional from '../component/Promotional';
import { NewsLetter } from '../component/NewsLetter';
import { Footer } from '../component/Footer';
import { toast } from 'sonner';


const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <Promotional />
            <h2 className='font-semibold text-3xl sm:text-4xl flex justify-center items-center my-6'>Products</h2>

            {/* responsive grid: 1 col mobile, 2 cols on small, 3 cols on large */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {products.map((p) => (
                    <article
                        key={p.id}
                        className="border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col bg-white"
                        aria-labelledby={`product-${p.id}-title`}
                    >
                        <div className="h-48 sm:h-56 flex items-center justify-center p-4 bg-gray-50">
                            <img
                                src={p.image}
                                alt={p.title}
                                className="max-h-full max-w-full object-contain"
                                loading="lazy"
                            />
                        </div>

                        <div className="p-4 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 id={`product-${p.id}-title`} className="font-semibold text-sm sm:text-base line-clamp-2">
                                    {p.title}
                                </h3>
                                <p className="font-bold mt-2 text-lg">₹{p.price}</p>
                            </div>

                            <button
                                onClick={() => {
                                    addToCart(p.id);
                                    toast.success(`${p.title.slice(0, 40)} added to cart 🛒`);
                                }}
                                className="mt-4 bg-blue-500 text-white rounded-lg py-2 w-full shadow-md hover:bg-blue-600 active:scale-95 transition-transform"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Products
// ...existing code...