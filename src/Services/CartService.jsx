import axios  from "axios";

const addToCartService=async(foods)=>{
    const token=localStorage.getItem('token')
    try{
      let response=await axios.post("http://localhost:8080/cart/addtocart",{foodId:foods._id,quantity:1},{headers:{'Authorization':'Bearer '+JSON.parse(token)}})
      console.log(response)
      return response
    }catch(error){
      console.log(error)
    }
}
const getCart=async ()=>{
    const token=localStorage.getItem('token')
    try{
        let response=await axios.get("http://localhost:8080/cart/getcart",{headers:{'Authorization':'Bearer '+JSON.parse(token)}})
        console.log(response)
        return response
    }catch(error){
        console.log(error)
    }
}
const updateCart = async(foodId,quantity)=>{
    const token=localStorage.getItem('token')
    try
    {
        let response  = await axios.get("http://localhost/8080/cart/updatecart",{headers:{'Authorization':'Bearer '+JSON.parse(token)}})
        console.log(response)
        return response;
    }
    catch(error)
    {
        console.log(error)
    }
}
async function removeFromCart(foodId) {
    const token = localStorage.getItem('token');
    const response = await axios.delete('http://localhost:8080/cart/deletecart', {
      data: { foodId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
export {addToCartService,getCart,updateCart,removeFromCart}