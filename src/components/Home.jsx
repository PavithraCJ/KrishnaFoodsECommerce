import { useState } from "react";
import Aboutus from "./Aboutus";
import CarouselDemo from "./CarouselDemo";
import ClientQuery from "./ClientQuery";
function Home()
{
    // let[username,setusername] = useState('');
    // setusername(setUsername);
    return(
        <div>
           <CarouselDemo></CarouselDemo>
           <Aboutus></Aboutus>
           <ClientQuery></ClientQuery>
        </div>
    )
}
export default Home;