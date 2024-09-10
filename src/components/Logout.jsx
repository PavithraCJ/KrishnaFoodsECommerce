import { useEffect } from "react";

function Logout({setUsername})
{
    useEffect(()=>{
        localStorage.removeItem('username')
        localStorage.removeItem('token')
    setUsername('')
    })
    return(
        <div>
            <br></br>
            You have logged out successfully
            <a href="Loginform.jsx">Back to Login</a>
        </div>
    )
}
export default Logout;