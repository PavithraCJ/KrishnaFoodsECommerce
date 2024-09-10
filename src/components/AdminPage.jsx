import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card } from 'react-bootstrap';
import { deleteuser, fetchAllUsers } from "../Reducers/userReducer";
import { deletUser } from "../Services/SignupService";
import { useNavigate } from "react-router-dom";
function AdminPage()
{
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.user);
    let navigate = useNavigate()
    useEffect(() => {
      dispatch(fetchAllUsers()); // Fetch users when the component is mounted
    }, [dispatch]);

    useEffect(()=>{
      dispatch(deleteuser());
    },[dispatch])
  
    if (loading) {
      return <div><h1>Loading...</h1></div>;
    }
  
    if (error) {
      return <div><h1>Error: {error}</h1></div>;
    }

    const handleDelete = async (id)=>{
      let response = await deletUser(id)
      console.log(response)
      alert("Deleted successfully")
      navigate('/admin')
      // if(response.data)
      //     alert(response.data)
  }

    return(
        <div>
            <h1>Customer Details</h1>
            <Container className="mt-5">
                <h2 className="text-center mb-4">User Profiles</h2>
                {users.length === 0 ? (
                    <div>No users found</div>
                ) : (
                    users.map((user, index) => (

                  <div>
                    <Card key={index} className="mb-3">
                        <Card.Body>
                        <Card.Title>{user.username}</Card.Title>
                        <Card.Text>
                            <strong>Email:</strong> {user.emailid}
                            <br />
                            <strong>Phone Number:</strong> {user.phonenumber}
                            <br />
                            <strong>Address:</strong> {user.address}
                        </Card.Text>
                        </Card.Body>
                        <div className="d-flex justify-content-center">
                     <button class="btn btn-primary mb-3" onClick={()=>handleDelete(user._id)}>Delete</button>
                   </div>
                    </Card>
                     
                  </div>
        ))
       
      )}
    </Container>
        </div>
    )
}
export default AdminPage;