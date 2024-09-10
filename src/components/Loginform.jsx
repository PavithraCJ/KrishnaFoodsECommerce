import { useState } from "react";
import {login} from "../Services/LoginService";
import { useNavigate } from "react-router-dom";
import UsersProfile from "./UsersProfile";
// import Link from "react-router-dom";
// import BrowserRouter from "react-router-dom"

function Loginform({setUsername})
{
    let[user,setUser]=useState({'emailid':'','password':''})
    let[status,setStatus] = useState(null)
    let[mail,setMail] = useState('')

    let navigate = useNavigate()
    const handleChange=(event)=>{
        const{name,value} = event.target 
        setUser({...user,[name]:value})
    }

    // const handleSubmit = async(event)=>{
    //     event.preventDefault()
    //     let status = await login(user)
    //     setStatus(status)
    //     if(status===200)
    //         navigate(`/profile/${user.emailid}`)
    //     setUser({
    //         'emailid':'',
    //         'password':''
    //     })
    // }

    function parseJWT(token)
    {
        //to extract the payload from JWT
        if(!token)
        {
            return
        }
        const base64Url = token.split('.')[1]
        console.log(base64Url)
        console.log(JSON.parse(window.atob(base64Url)))
        return JSON.parse(window.atob(base64Url))
    }
    
    const handleSubmit = async(event)=>{
        event.preventDefault()
        // let status = await login(user)
        // setStatus(status)
        try
        {
            const response = await login(user)
            if(response)
            {
                setMail(user.emailid)
            }
            let token = response.data//JWT Token
            let userData = parseJWT(token)
            //ParseJWT returns user details
            //userData = {'email':'..','firstname':'','role':'user','iat':'','exp':''} from second part of the token called payload
            console.log(userData)
            localStorage.setItem('token',JSON.stringify(token))
            localStorage.setItem('username',userData.username);
            console.log("Username"+userData.username)
            setUsername(userData.username)
            console.log(userData)
            if((userData.username) === 'Admin')
                navigate('/admin')
            //navigate(`/profiles/:emailid`)
            if((userData.username)!='Admin')
                navigate('/home')
            //navigate('/home')
        }
        catch(error)
        {
            console.log(error)
        }
    }

    return(
        <div>
            <form onSubmit={(event)=>handleSubmit(event)}>
                Enter email:<br></br>
                <input type="email" value={user.emailid} name="emailid" onChange={(event)=>handleChange(event)}></input><br></br>
                Enter password:<br></br>
                <input type="password" value={user.password} name="password" onChange={(event)=>handleChange(event)}></input><br></br><br></br>
                <input type="submit" value="Submit"></input>
                {/* {mail && 
                    <button>ProfileDetails</button>
                }  */}
                {mail && <UsersProfile emailid={mail}></UsersProfile>
                }
            </form>
        </div>
    )
}
export default Loginform;