import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getuserservice, updateUserService } from "../Services/LoginService";
import { Container, Card } from 'react-bootstrap';
import { Button, Form } from 'react-bootstrap';

function UsersProfile({username})
{
        //const {emailid} = useParams();    
       let [user,setUser] = useState([])
       const [editMode, setEditMode] = useState(false);
        const [updatedUser, setUpdatedUser] = useState({
            username: "",
            password: "",
            emailid: "",
            phonenumber: "",
            address: ""
        });

    async function getUser(){
        try
        {
            let response = await getuserservice(username)
            console.log(response)
            setUser(response.data)

        }
        catch(error)
        {
            console.error("Error :",error)
        }
            
    }

    useEffect(()=>{
        getUser()
    },[username])
    
    const handleChange =(e)=>{
        const {name,value} = e.target;
        setUpdatedUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleUpdate = async () => {
        try {
            await updateUserService(updatedUser);
            setUser(updatedUser);
            setEditMode(false);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return(
        <div>
                 <Container className="mt-5">
                    <h2 className="text-center mb-4">User Profiles</h2>
                    {/* {user.length===0 ? (
                        <div>No users found</div>
                    ) : <Card> */}
                    {user ?(

                        <Card>
                            <Card.Body>
                                {editMode ? (
                                    <Form>
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="username" 
                                            value={updatedUser.username} 
                                            onChange={handleChange} 
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            name="password" 
                                            value={updatedUser.password} 
                                            onChange={handleChange} 
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            name="emailid" 
                                            value={updatedUser.emailid} 
                                            onChange={handleChange} 
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="phonenumber" 
                                            value={updatedUser.phonenumber} 
                                            onChange={handleChange} 
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="address" 
                                            value={updatedUser.address} 
                                            onChange={handleChange} 
                                        />
                                    </Form.Group>
                                    <Button variant="primary" onClick={handleUpdate}>Save</Button>
                                    <Button variant="secondary" className="ml-2" onClick={() => setEditMode(false)}>Cancel</Button>
                                </Form>
                            ):(
                                <div>
                            <Card.Title>{user.username}</Card.Title>
                            <Card.Text>
                                <strong>Password:</strong>{user.password}
                                <br/>
                                <strong>Email:</strong> {user.emailid}
                                <br />
                                <strong>Phone Number:</strong> {user.phonenumber}
                                <br />
                                <strong>Address:</strong> {user.address}
                            </Card.Text>
                            <Button variant="primary" onClick={() => setEditMode(true)}>Edit</Button>
                            </div>)}
                            </Card.Body>
                        </Card>):(
                            <div>
                                <strong>No User Found</strong>
                            </div>
                        )}
                    
                    
    </Container>
    
        </div>
    )
}
export default UsersProfile;