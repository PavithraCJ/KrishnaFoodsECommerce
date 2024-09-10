import React, { useState,useEffect} from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { deleteFood, editFood, saveFood } from '../Services/BreakfastAdminService';
import axios from "axios";
import { getAllBreakfast } from '../Services/BreakfastService';
import { useRef } from "react";
function BreakfastAdmin()
{
    let[addFood,setAddFood] = useState({
        'foodName':'',
        'price':'',
        'description':''
    })
    let[food,setFood] = useState([])
    let[editedIndex,setEditedIndex]=useState(null)
    const[file,setFile] = useState(null);
    // const[data,setData] = useState()
    const fileRef = useRef()

    const handleChange = (e)=>{
        const {name,value} = e.target
        setAddFood({...addFood,[name]:value})
    }
    async function getAllFoods()
    {
        let response = await getAllBreakfast()
        setFood(response.data)
        console.log(response.data);
    }
//     const addItem = async(e)=>{
//         e.preventDefault();
//         let response = await saveFood(addFood) 
//         if(response && response.data)
//         {
//             getAllFoods()
//             setFood({
//                 'image':'',
//                 'foodName':'',
//                 'price':'',
//                 'description':''
//             })
//     }
// }
    useEffect(()=>{
        getAllFoods()
    },[])

    
    const handleImageChange =(event)=>
    {
        setFile(event.target.files[0])
    };
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',file);
        formData.append('foodName', addFood.foodName);
        formData.append('price', addFood.price);
        formData.append('description', addFood.description);
        try
        {
            const response = await saveFood(formData)
            if (response && response.data) {
                // const newFood = response.Food;
                // setFood([...food, newFood]);
                getAllFoods();
                setAddFood({
                    foodName: '',
                    price: '',
                    description: ''
                }); 
           
            setFile(null)
             if(fileRef.current)
                fileRef.current.value=''
            }
        } 
        catch(error)
        {
            console.log('Error uploading File',error)
        }
    }

    const updateFood = async(e)=>{
        e.preventDefault();
        if(addFood._id)
        {
            const updatedFood = {...addFood}
            if(file)
            {
                const formData = new FormData();
                formData.append('image', file);
                formData.append('foodName', addFood.foodName);
                formData.append('price', addFood.price);
                formData.append('description', addFood.description);
                updatedFood['image'] = formData.get('image');
            }
            let response = await editFood(updatedFood);
            if (response && response.data) {
                getAllFoods();
                setAddFood({
                    foodName: '',
                    price: '',
                    description: '',
                    _id: '' // Clear _id after update
                });
                setEditedIndex(null);
                setFile(null);
                if (fileRef.current) 
                    fileRef.current.value = '';
        } 
    }  
        else
        {
            console.log("Item Not Found!!")
        }
    }

    const handleDelete = async(id)=>{
        let response = await deleteFood(id)
        if(response.data)
            getAllFoods()
        else
        {
            alert("Error in deleting the file")
        }
    }

    return(
        <div>
             <Container className="mt-5">
            <h2>Add Food Item</h2>
            <Form onSubmit={editedIndex!==null ? updateFood : handleSubmit}>
                <Form.Group controlId="foodImage">
                    <Form.Label>Choose Image File</Form.Label>
                    <Form.Control 
                    type="file" 
                    onChange={handleImageChange} 
                    ref={fileRef}/>
                </Form.Group>

                <Form.Group controlId="foodName">
                    <Form.Label>Food Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter food name"
                        name="foodName"
                        value={addFood.foodName}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="foodPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter price"
                        name="price"
                        value={addFood.price}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="foodDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        placeholder="Enter description"
                        value={addFood.description}
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    {editedIndex!==null ? 'Update Item' : 'Add Item'}
                </Button>
            </Form>
        </Container>

    <Table className='mt-5'striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Food Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {food && food.map((f,index)=>(
            <div>
                {editedIndex === index ?
                <tr>
                    <td><input type="file" name="image" onChange={handleImageChange} ref={fileRef}></input></td>
                    <td><input type="text" name="foodName" value={addFood.foodName} onChange={(e)=>handleChange(e)}></input></td>
                    <td><input type="text" name="price" value={addFood.price} onChange={(e)=>handleChange(e)}></input></td>
                    <td><input type="text" name="description" value={addFood.description} onChange={(e)=>handleChange(e)}></input></td>
                    <button onClick={updateFood}>Update</button>
                </tr>:
                    <tr key={index}>
                        <td><img src={f.image}  alt={f.foodName} style={{ width: '100px' }}></img></td>
                        <td>{f.foodName}</td>
                        <td>{f.price}</td>
                        <td>{f.description}</td>
                        <div>
                            <td><button onClick={()=>{
                                setAddFood(f);
                                setEditedIndex(index);
                            }}>UPDATE</button></td>
                            <td><button onClick={()=>handleDelete(f._id)}>Delete</button></td>
                        </div>
                    </tr> }
            </div>       
        ))}
      </tbody>
    </Table>
  
        
        </div>
    )
}
export default BreakfastAdmin;