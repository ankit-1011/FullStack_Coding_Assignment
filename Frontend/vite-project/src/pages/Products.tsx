import { useEffect, useState } from 'react';
import type { Product } from '../types/product';
import { getProducts } from '../services/productServices';
import { useCart } from '../context/cartContext';

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const {addToCart} = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        fetchProducts();
    }, [])

    return (
        <div style={{
            display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", padding: "20px"
        }}>
            {products.map((p) => (
                <div key={p.id} style={{ border: "1px solid gray", padding: "10px", borderRadius: "8px" }}>
                    <img src={p.image} alt={p.name} style={{ width: "100%", height: "120px", objectFit: "cover" }} />
                    <h3>{p.name}</h3>
                    <p>₹{p.price}</p>
                    <button onClick={() => addToCart(p.id)}>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

export default Products