import express , {type Request, type Response} from 'express';
import cors from 'cors';

const PORT =5000;
let app=express();

app.get('/',(req:Request,res:Response)=>{
    res.send("Vibe commerce API is running");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})