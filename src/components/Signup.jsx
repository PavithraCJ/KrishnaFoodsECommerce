import { useEffect, useState } from "react";
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, addUser } from "../Reducers/userReducer";
import { useNavigate } from "react-router-dom";
function Signup() {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.user)
    let navigate = useNavigate()
    let [user, setUser] = useState({
        'username': '',
        'phoneNumber': '',
        'email': '',
        'password': '',
        'address': ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }

    // async function getAllUser()
    // {
    //     try
    //     {
    //         let response = await getAllUserService()
    //         setUser(response.data)
    //     }
    //     catch(error)
    //     {
    //         console.log(error)
    //     }
    // }

    // async function addUser(user){
    //     try
    //     {
    //         let response = await insertUser(user)
    //         alert("User Registered Successfully")
    //         console.log(response.data)
    //     }
    //     catch(error)
    //     {
    //         alert("Error")
    //         console.log(error)
    //     }

    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        let status = dispatch(addUser(user))
        if(status)
        {
            navigate('/login')
        }
        setUser({
            'username': '',
            'emailid': '',
            'phonenumber': '',
            'password': '',
            'address': ''
        })
    }
    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])
    
    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    
    return (
        <div>
            {/* <form onSubmit={(event)=>handleSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput1">UserName</label>
                    <input type="text" className="form-control" id="formGroupExampleInput1" value={user.username} onChange={(event)=>handleChange(event)} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">PhoneNumber</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="PhoneNumber" value={user.phoneNumber} onChange={(event)=>handleChange(event)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={user.email} onChange={(event)=>handleChange(event)}></input>
                </div>
                <div className="form-group">
                    <label hfor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={user.password}onChange={(event)=>handleChange(event)}></input>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput3">Address</label>
                    <input type="text" className="form-control" id="formGroupExampleInput3" value={user.address} onChange={(event)=>handleChange(event)}></input>
                </div>
                {/* <fieldset>
                <legend>Address Details</legend>
                    <div class="form-group">
                        <label for="exampleFormControlInput2">Flat Number:</label>
                        <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Flat Number" value={user.address.flatNumber} onChange={(event)=>handleChange(event)}></input>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlInput3">StreetName:</label>
                        <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="StreetName" value={user.address.firststreetName} onChange={(event)=>handleChange(event)}></input>
                    </div>
            
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">StreetName2:</label>
                        <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="StreetName" value={user.address.secondstreetName} onChange={(event)=>handleChange(event)}></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">City:</label>
                        <input class="form-control" type="text" placeholder="Chennai" readonly value={user.address.city} onChange={(event)=>handleChange(event)}></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">State:</label>
                        <input class="form-control" type="text" placeholder="TamilNadu" readonly value={user.address.state} onChange={(event)=>handleChange(event)}></input>
                        
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput5">PinCode:</label>
                        <input type="text" class="form-control" id="exampleFormControlInput5" placeholder="PinCode" value={user.address.pincode} onChange={(event)=>handleChange(event)}></input>
                    </div>
                </fieldset> 
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}
            <Container className="mt-5">
                <h2 className="text-center mb-4">Signup</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName" className="mb-3">
                        <Form.Label className="d-flex justify-content-left h5">Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formPhoneNumber" className="mb-3">
                        <Form.Label className="d-flex justify-content-left h5">Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="phonenumber"
                            value={user.phonenumber}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label className="d-flex justify-content-left h5">Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="emailid"
                            value={user.emailid}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mb-3">
                        <Form.Label className="d-flex justify-content-left h5">Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formAddress" className="mb-3">
                        <Form.Label className="d-flex justify-content-left h5">Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={user.address}
                            onChange={handleChange}
                            placeholder="Enter your address"
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="h5">
                        Signup
                    </Button>
                </Form>

            </Container>
            {/* <div>
                {user && user.map((u, index) => <div key={index}>
                    {u.username}&nbsp;
                    {u.phoneNumber}&nbsp;
                    {u.email}&nbsp;
                    {u.password}&nbsp;
                    {u.address}</div>


                )}
            </div> */}
        </div>
    )
}
export default Signup;