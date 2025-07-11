import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Product = {
  name: string;
  price: string;
  img: string;
};

type CartContextType = {
  cart: Product[];
  cartCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (indexToRemove: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.some(item => item.name === product.name && item.price === product.price);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  const removeFromCart = (indexToRemove: number) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
  };

  const cartCount = cart.length;

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};


