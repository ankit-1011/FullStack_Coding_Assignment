import { useEffect, useState } from 'react';
import type { Product } from '../types/product';
import { getProducts } from '../services/productServices';
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
            <h2 className='font-semibold text-4xl flex justify-center align-center'>Products</h2>
            <div style={{
                display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", padding: "20px"
            }} >
                {products.map((p) => (
                    <div key={p.id} style={{ border: "1px solid gray", borderRadius: "8px" }} className='w-86 h-80'>
                        <img src={p.image} alt={p.title} className='w-full h-50 object-contain  rounded-md' />
                        <div className="flex justify-between m-3">
                            <h3 className='font-bold'>{p.title.slice(0,20)}</h3>
                            <p className='font-bold'>₹{p.price}</p>
                        </div>
                        <button onClick={() => {
                            addToCart(p.id);
                            toast.success(`${p.title.slice(0,20)} added to cart 🛒`);
                        }}
                            className='bg-blue-500 text-white rounded-2xl p-2 m-2 w-80  shadow-md active:shadow-indigo-500/50 active:scale-95'>Add to Cart</button>
                    </div>
                ))}
            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Products