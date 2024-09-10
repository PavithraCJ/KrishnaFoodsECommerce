import axios from "axios";
async function login(user)
{   try
    {
        let response = await axios.post('http://localhost:8080/signup/login',user)
        //user is an object with the properties email and password
        return response
    }
    catch(error)
    {
        console.log(error)
        return error.message;
    }
}
async function getuserservice(username)
{
    
    try
    {
        let response = await axios.get('http://localhost:8080/signup/getuser/'+username)
        return response;
    }
    catch(error)
    {
        console.log(error)
    }
}
async function updateUserService(user)
{
    const token=localStorage.getItem('token')
    try 
    {
        let response = await axios.put("http://localhost:8080/signup/update"+user,{headers:{'Authorization':'Bearer '+JSON.parse(token)}})
        return response;
    }
    catch(error)
    {
        console.log(error)
    }
}
export {login,getuserservice,updateUserService};