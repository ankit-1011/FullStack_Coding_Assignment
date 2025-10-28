import { Router } from "express";
import type { Request,Response } from "express";
import { products } from "../data/products.ts";


const router =Router();

router.get("/products",(req:Request,res:Response)=>{
res.json({
    success:true,
    data:products,
})
});


export default router;