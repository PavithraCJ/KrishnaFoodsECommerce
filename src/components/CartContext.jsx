import React, { useState, useContext, createContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
}
