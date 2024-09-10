import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { getOneUser } from "../Reducers/userReducer";


function Profile()
{
  const {emailid} = useParams() 
    const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch((getOneUser(emailid))); // Fetch users when the component is mounted
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">User Profiles</h2>
      {users.length === 0 ? (
        <div>No users found</div>
      ) : (
        users.map((user, index) => (
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
          </Card>
        ))
      )}
    </Container>
)}
export default Profile;