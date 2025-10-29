import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.ts";
import cartRoutes from "./routes/cartRoutes.ts";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/vibecommerce") 
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api", productRoutes);
app.use("/api", cartRoutes);

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
