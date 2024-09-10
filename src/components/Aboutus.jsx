import about from "../images/about.png";
function Aboutus()
{
    return(
        <div>
            <div className="container-fluid about-cont">
                <div className="container">
                <div className="row pt-5">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center">
                        <img src={about} className="img-fluid"></img>
                    </div>
                    <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 about-us-content">
                        <h1 className="h1">About Us</h1>
                        <p>
                        Welcome to our family-run catering service, proudly serving the needs of our cherished elders for generations. As the second generation to continue this heartfelt mission, we are committed to providing wholesome, lovingly prepared meals tailored specifically for the elderly.<br></br>

                        Our story began with a simple yet profound goal: to ensure that those who have nurtured us throughout our lives receive the care they deserve, even when their loved ones are miles away. We understand the challenges faced by families who live abroad and worry about the well-being of their aging parents. That’s why we’ve dedicated ourselves to delivering nutritious, home-cooked meals that bring comfort and warmth to those who need it most.
                        <br>
                        </br> 
                        Our dishes are thoughtfully crafted with minimal spices, focusing on taste, nutrition, and the personal touch that only a home-cooked meal can offer. Every meal we prepare is a reflection of the love and respect we have for the generation that came before us.
                        <br></br>
                        We are honored to continue this service, ensuring that your loved ones enjoy the simple pleasure of a delicious, home-cooked meal, even when you can’t be there in person.
                        <br></br>
                        Thank you for trusting us to care for those who mean the most to you.
                        </p>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}
export default Aboutus;