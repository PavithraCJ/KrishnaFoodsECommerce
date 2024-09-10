import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Loginform from './components/Loginform';
import UsersProfile from './components/UsersProfile';
import Breakfast from './components/Breakfast';
import { useState, useEffect} from 'react';
import Header from './components/Header';
import Logout from './components/Logout';
import AdminPage from './components/AdminPage';
import BreakfastAdmin from './components/BreakfastAdmin';
import Cart from './components/Cart';
import CartComponent from './components/Cart';
function App() {

  let [username, setUsername] = useState('');

  useEffect(() => {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
          setUsername(storedUsername);
      }
  }, []);
  return (
    <div className="App">
     <BrowserRouter>
      <Header username={username}></Header> 
      {/* {username && 
      <div>
        <Link to="/breakfast"></Link><br></br>
        <Link to="/fileupload">Upload Image</Link><br></br>
        <Link>Welcome {username}</Link><br></br>
        <Link to="/logout">Logout</Link><br></br>
        </div>} */}
        
     <Routes>
      <Route path="/" element={<Layout></Layout>}>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/signup" element = {<Signup></Signup>}></Route>
          <Route path="/login" element = {<Loginform setUsername={setUsername}></Loginform>}></Route>
         <Route path="/profile" element = {<UsersProfile username = {username}></UsersProfile>}></Route> 
          <Route path="/breakfast" element={<Breakfast></Breakfast>}></Route>
          <Route path="/logout" element={<Logout setUsername={setUsername}></Logout>}></Route>
          <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
          <Route path="/breakfastadmin" element={<BreakfastAdmin></BreakfastAdmin>}></Route>
          <Route path="/cart" element={<CartComponent></CartComponent>}></Route>
      </Route>
     </Routes>
     
     </BrowserRouter>
     
    </div>
  );
}

export default App;
