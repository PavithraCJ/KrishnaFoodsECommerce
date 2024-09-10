import axios from "axios"
async function getAllBreakfast()
{
    try
    {
        let response = await axios.get('http://localhost:8080/breakfast/getallbreakfasts')
        return response;
    }
    catch(error)
    {
        console.log(error)
    }
}
export {getAllBreakfast}