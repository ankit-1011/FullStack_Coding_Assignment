import React, { createContext, useContext, useState, useEffect } from "react";

type CartItem = {
  productId: number;
  quantity: number;
  name?: string;
  price?: number;
  subtotal?: number;
};

type CartContextType = {
  cart: CartItem[];
  total: number;
  fetchCart: () => void;
  addToCart: (productId: number, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const fetchCart = async () => {
    const res = await fetch("http://localhost:5000/api/cart");
    const data = await res.json();
    setCart(data.data);
    setTotal(data.total);
  };

  const addToCart = async (productId: number, quantity: number = 1) => {
    await fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity }),
    });
    await fetchCart();
    setIsDrawerOpen(true);
  };

  const removeFromCart = async (productId: number) => {
    await fetch(`http://localhost:5000/cart/${productId}`, {
      method: "DELETE",
    });
    await fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        fetchCart,
        addToCart,
        removeFromCart,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
