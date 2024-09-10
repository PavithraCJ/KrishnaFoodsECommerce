// // import Container from 'react-bootstrap/Container';
// // import Navbar from 'react-bootstrap/Navbar';
// import React, { useEffect, useState } from 'react';
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
// import {Link} from 'react-router-dom';
// import Aboutus from "./Aboutus";
// import CarouselDemo from "./CarouselDemo";
// import ClientQuery from "./ClientQuery";

// function Header({username})
// {
//     // let[name,setName] = useState('');
//     // useEffect(() => {
//     //     if (setUsername && setUsername !== name) {
//     //         console.log("Updating name to:", setUsername);
//     //         setName(setUsername);
//     //     }
//     // }, [setUsername, name]);
    
//     return(
//         <div>
//                 <Navbar className="first-nav">
//                 <Container className='d-flex justify-content-center'>
//                 <Navbar.Brand href="#home" className='text-center text-light'>We deliver orders around Chennai</Navbar.Brand>
//                 </Container>
//             </Navbar>


//             <Navbar expand="lg" className="second-nav">
//             <Container fluid>
//                 <Navbar.Brand href="index.html" className='krishna-foods'>Krishna Foods
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="navbarSupportedContent"/>
//                 <Navbar.Collapse id="navbarSupportedContent" className="bgcolor">
//                 <Nav className="me-auto mb-2 mb-lg-0">
//                     {/* <Nav.Link><Link to="/Home" className="home">Home</Link></Nav.Link> */}
//                     {username && 
//                         (<div>
//                         <Nav.Link><Link to="/Home" className="home">Home</Link></Nav.Link>
//                         <NavDropdown title="Menu items" className="menuitems">
//                         <NavDropdown.Item><Link to="/breakfast">Breakfast menu</Link></NavDropdown.Item>
//                         <NavDropdown.Item><Link to="/Home">Lunch menu</Link></NavDropdown.Item>
//                         <NavDropdown.Item><Link to="/Home">Dinner menu</Link></NavDropdown.Item>
//                         </NavDropdown>
//                         </div>
//                     )}
                        
//                 </Nav>
                
//                 {/* <Nav.Link><Link to="/profile" className="home">Profile</Link></Nav.Link>
//                     <Nav.Link><Link to="/login" className="home">Login /</Link></Nav.Link>
//                     <Nav.Link><Link to="/signup" className="aboutus">Signup</Link></Nav.Link> */}
//                     {/* {name &&
//                         (<div>
//                         <Nav.Link><Link to="/Home" className="contact-us">Cart</Link></Nav.Link>
//                         </div>)
//                     } */}
//                   <Nav className="ms-auto mb-2 mb-lg-0">
//                     {username ? 
//                     (<div>
//                         <NavDropdown title="Profile" className="menuitems"></NavDropdown>
//                         <NavDropdown.Item><Link to="/profile">Profile Details</Link></NavDropdown.Item>
//                         <NavDropdown.Item><Link to="/logout">Logout</Link></NavDropdown.Item>
                        
//                     </div>):(
//                     <div>
//                         <NavDropdown.Item><Link to="/login">Login</Link></NavDropdown.Item>
//                         <NavDropdown.Item><Link to="/signup">Signup</Link></NavDropdown.Item>
//                     </div>
// )}
                    
//                     </NavDropdown>  
//                 </Nav>
//                 </Navbar.Collapse>
//             </Container>
//             </Navbar>
//             <div class="row">
//                 <div class="col-xl-12 col-sm-12 d-flex justify-content-center">
//                     <h1>Welcome {name}</h1>
//                 </div>
//             </div>
//             {/* <CarouselDemo></CarouselDemo>
//             <Aboutus></Aboutus>
//             <ClientQuery></ClientQuery> */}
//         </div>
        
    
//     );
        
// }
// export default Header;
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from 'react';
import { Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
//import Aboutus from "./Aboutus";
//import CarouselDemo from "./CarouselDemo";
// import ClientQuery from "./ClientQuery";

const Header=({ username })=> {
    return (
        <div>
            <Navbar className="first-nav">
                <Container className='d-flex justify-content-center'>
                    <Navbar.Brand href="#home" className='text-center text-light'>We deliver orders around Chennai</Navbar.Brand>
                </Container>
            </Navbar>

            <Navbar expand="lg" className="second-nav">
                <Container fluid>
                    <Navbar.Brand href="index.html" className='krishna-foods'>Krishna Foods</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent" className="bgcolor">
                        
                            {(username &&(username==='Admin')) && (
                                <div>
                                <Nav className="me-auto mb-2 mb-lg-0">
                                    <Nav.Link><Link to="/breakfastadmin">Breakfast</Link></Nav.Link>
                                </Nav>
                                <Nav className="ms-auto mb-2 mb-lg-0 d-flex">
                                <NavDropdown title="Profile" className="menuitems">
                                        <NavDropdown.Item><Link to="/profile">Profile Details</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/logout">Logout</Link></NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                </div>
                            )}

                            {(username && (username!='Admin')) && (
                                <Nav className="me-auto mb-2 mb-lg-0">
                                <Nav.Link><Link to="/home" className="home">Home</Link></Nav.Link>
                                <NavDropdown title="Menu items" className="menuitems">
                                    <NavDropdown.Item><Link to="/breakfast">Breakfast menu</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/home">Lunch menu</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/home">Dinner menu</Link></NavDropdown.Item>
                                </NavDropdown>
                                </Nav>
                            )}
                        <Nav className="ms-auto mb-2 mb-lg-0 d-flex">
                            {(username && (username!='Admin')) && (
                                <div>
                                    <Nav.Link><Link to="/cart" className="contact-us">Cart</Link></Nav.Link>
                                    <NavDropdown title="Profile" className="menuitems">
                                        <NavDropdown.Item><Link to="/profile">Profile Details</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/logout">Logout</Link></NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                            )}
                            
                            {!username &&(
                                <NavDropdown title="Profile" className="menuitems">
                                    <NavDropdown.Item><Link to="/login">Login</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/signup">Signup</Link></NavDropdown.Item>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="row">
                <div className="col-xl-12 col-sm-12 d-flex justify-content-center">
                    <h1>Welcome {username ? username : 'Guest'}</h1>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Header);
