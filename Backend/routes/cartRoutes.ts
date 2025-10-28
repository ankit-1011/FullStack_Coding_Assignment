import type { Response, Request } from 'express';
import { Router } from "express";
import { products } from '../data/products.ts';

const router = Router();


let cart: { productId: number, quantity: number }[] = [];

router.post('/cart', (req: Request, res: Response) => {
    const { productId, quantity } = req.body;

    const product = products.find((p) => p.id === productId);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    
        const existing = cart.find((item) => item.productId === productId);
        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push({ productId, quantity });
        }
        return res.status(200).json({ message: "Product added to cart", cart });
})


router.get('/cart', (req: Request, res: Response) => {
    const detailedCart = cart.map((item) => {
        const product = products.find((p) => p.id === item.productId);
        return {
            ...item,
            name: product?.name,
            price: product?.price,
            subtotal: product ? product.price * item.quantity : 0,
        }
    })

    const total = detailedCart.reduce((acc, item) => acc + item.subtotal, 0);

    return res.json({
        success: true,
        data: detailedCart,
        total,
    })
})


router.delete('/cart/:id',(req:Request,res:Response)=>{
    const {id} =req.params;
    const productId=parseInt(id);

    const index = cart.findIndex((item)=>item.productId===productId); 

    if(index === -1){
        return res.status(404).json({message:"Product not found in cart"});
}

cart.splice(index,1);
return res.status(200).json({message:"Product removed from cart",cart})
})


router.post('/checkout',(req:Request,res:Response)=>{
    if(cart.length===0){
        return res.status(400).json({message:"Cart is empty"});
    }

      const detailedCart = cart.map((item) => {
        const product = products.find((p) => p.id === item.productId);
        return {
            ...item,
            name: product?.name,
            price: product?.price,
            subtotal: product ? product.price * item.quantity : 0,
        }
    })

    const total = detailedCart.reduce((acc, item) => acc + item.subtotal, 0);

    const receipt ={
        id:Date.now(),
        items:detailedCart,
        total,
        timestamp:new Date().toISOString(),
    }

    cart=[];

    res.status(200).json({message:"Checkout successful",receipt
    })
})
export default router;