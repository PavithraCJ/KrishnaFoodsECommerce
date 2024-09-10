import { useEffect } from "react";
import { useState } from "react";
import { getAllBreakfast } from "../Services/BreakfastService";
import { Container, Card } from 'react-bootstrap';
import { useCart } from './CartContext';
import {useNavigate} from "react-router-dom"
import { addToCartService } from "../Services/CartService";

function Breakfast()
{
    let[food,setFood] = useState([])
    // const { addToCart } = useCart();
    let navigate = useNavigate();

    async function getAllFoods()
    {
        let response = await getAllBreakfast()
        setFood(response.data)
        console.log(response.data);
        
    }
    const addToCart=async (foods)=>{
        let response =await addToCartService(foods)
        if(response)
          navigate('/cart')
      }

    useEffect(()=>{
        getAllFoods()
    },[])
    return(
        <div>
            <div className="container-fluid breakfast-cont">
            <div className="row">
            {food && food.map((foods)=>(
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    
                        <Card  className="mt-5 mb-3 breakfast-card" style={{height:"400px"}}>
                            <Card.Body>
                            <Card.Title>
                            <img src={foods.image} className="img-fluid"></img>
                            </Card.Title>                                
                          
                            <Card.Text className="breakfast-text">
                                <strong>{foods.foodName}</strong>
                                <br />
                                <strong>Rs.{foods.price}</strong>
                                <br />
                                <strong>{foods.description}</strong>
                            </Card.Text>
                            {/* onClick={() => addToCart(foods)} */}
                            <button className="btn btn-primary rounded" onClick={()=>addToCart(foods)}>Add To Cart</button>
                            </Card.Body>
                        </Card>
                </div>
))}
                
            </div>
        </div>
        </div>
    )
}
export default Breakfast;