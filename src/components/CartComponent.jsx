import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../Services/CartService";

function Cart()
{
    let[cart,setCart] = useState(null);
    let[total,setTotal] = useState(0);
    let navigate = useNavigate()

    let fetchCart = async()=>{
        let response = await getCart();
        console.log(response)
        console.log(response.data);
        if(response)
        {
            setCart(response);
            const calculatedTotal = response.data.items.reduce((sum,item)=> sum + item.foodId.price * item.quantity,0);
            setTotal(calculatedTotal);
        }
    };

    // const handleUpdateQuantity = async (foodId, newQuantity) => {
    //     if (newQuantity > 0) {
    //       await updateCart(foodId, newQuantity);
    //       fetchCart(); // Refresh the cart after updating quantity
    //     }
    //   };
    
    //   // Remove an item from the cart
    //   const handleRemoveItem = async (foodId) => {
    //     await removeFromCart(foodId);
    //     fetchCart(); // Refresh the cart after removing an item
    //   };
    
      useEffect(() => {
        fetchCart();
      }, []);
    
    return(
        <div>
            <h2>Your Cart</h2>
      {cart && cart.items && cart.items.length > 0 ? (
        <div>
          {cart.items.map((item) => (
            <div key={item.foodId._id} className="cart-item">
              <div>
                <strong>{item.foodId.foodName}</strong> - Rs.{item.foodId.price} x {item.quantity}
              </div>
              {/* <div>
                <button onClick={() => handleUpdateQuantity(item.foodId._id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleUpdateQuantity(item.foodId._id, item.quantity + 1)}>+</button>
                <button onClick={() => handleRemoveItem(item.foodId._id)}>Remove</button>
              </div> */}
            </div>
          ))}
          <h3>Total: Rs.{total}</h3>
          <button className="btn btn-primary" onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}.0
        </div>
    )
}
export default Cart;