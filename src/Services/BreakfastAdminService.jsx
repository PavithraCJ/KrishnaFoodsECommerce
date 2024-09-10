import axios from "axios"
// async function saveFood(food)
// {
//     const token=localStorage.getItem('token')
//     try
//     {
//         let response =  await axios.post('http://localhost:8080/breakfast/addbreakfast',food,{headers:{'Authorization':'Bearer '+JSON.parse(token)}})
//         return response
//     }
//     catch(error)
//     {
//         console.log(error)
//         return {data:null}
//     }
// }
async function saveFood(formData) {
    const token = localStorage.getItem('token');
    try {
        let response = await axios.post('http://localhost:8080/breakfast/addbreakfast', formData, {
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(token),
                'Content-Type': 'multipart/form-data',
            }
        });
        alert("File Added Successfully")
        return response;
    } catch (error) {
        console.log(error);
        return { data: null };
    }
}
const editFood = async(food)=>
    {
        const token=localStorage.getItem('token')
        try
        {
            let response = await axios.put("http://localhost:8080/breakfast/update",food,{headers:{'Authorization':'Bearer '+JSON.parse(token)}})
            return response
        }
        catch(error)
        {
            console.log(error)
            return {data:null}
        }
    }
const deleteFood = async(id)=>
{
    const token = localStorage.getItem('token')
    try
    {
        let response = await axios.delete("http://localhost:8080/breakfast/delete/"+id,{headers:{'Authorization':'Bearer '+JSON.parse(token)}})
        return response
    }
    catch(error)
    {
        console.log(error)
        return {data:null}
    }
}
export {saveFood,editFood,deleteFood}