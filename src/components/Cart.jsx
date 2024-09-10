// src/components/CartComponent.js

import React, { useEffect, useState } from 'react';
import { getCart, removeFromCart, updateCart }from '../Services/CartService';

const CartComponent = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartData = await getCart();
        setCart(cartData);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);

  const handleRemoveItem = async (foodId) => {
    try {
      await removeFromCart(foodId);
      setCart(cart.items.filter(item => item.foodId._id !== foodId));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handleUpdateQuantity = async (foodId, quantity) => {
    try {
      await updateCart(foodId, quantity);
      setCart(cart.items.map(item => 
        item.foodId._id === foodId ? { ...item, quantity } : item
      ));
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  if (!cart) return <div>Loading...</div>;

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {/* {cart.items.map(item => ( */}
          <li key={cart.items.foodId._id}>
            {cart.items.foodId.foodName} - {cart.items.quantity} x Rs.{cart.items.foodId.price}
            <button onClick={() => handleUpdateQuantity(cart.items.foodId._id, cart.items.quantity + 1)}>+</button>
            <button onClick={() => handleUpdateQuantity(cart.items.foodId._id, cart.items.quantity - 1)}>-</button>
            <button onClick={() => handleRemoveItem(cart.items.foodId._id)}>Remove</button>
          </li>
      </ul>
      <h3>Total: Rs.{cart.items.reduce((total, item) => total + cart.items.quantity * cart.items.foodId.price, 0)}</h3>
    </div>
  );
};

export default CartComponent;
