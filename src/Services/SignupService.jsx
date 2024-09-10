import axios from "axios";
import apiservice from "./ApiService";
async function insertUser(user)
{
        try
        {
                const token=localStorage.getItem('token')
                let response = await apiservice.post('/signup/adduser',user)
                return response;
        }
        catch(error)
        {
                 return {data:null}
        }

}
async function getAllUserService()
{
        let response = await apiservice.get('/signup/getallusers')
        return response;
}
 async function deletUser(id)
{
    const token=localStorage.getItem('token')
    try
    {
        let response = await axios.delete('http://localhost:8080/signup/delete/'+id,{headers:{'Authorization':'Bearer '+JSON.parse(token)}})
        return response
    }
    catch(error)
    {
        console.log(error)
        return {data:null}
    }
}
export {insertUser,getAllUserService,deletUser};