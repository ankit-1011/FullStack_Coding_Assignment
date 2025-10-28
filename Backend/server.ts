import express , {type Request, type Response} from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.ts';
import cartRoutes from './routes/cartRoutes.ts';

const PORT =5000;
let app=express();

app.use(cors());
app.use(express.json())

app.use('/api',productRoutes)
app.use('/api',cartRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})