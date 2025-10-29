import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: Number, // DB wale product ka reference
    ref: "Product",
    required: true
  },
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  subtotal: {
    type: Number,
    required: true
  },
});

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    items: [orderItemSchema], // cart ke sare products
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
export const OrderItem = mongoose.model("OrderItem", orderItemSchema);