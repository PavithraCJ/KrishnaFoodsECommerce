import banner1 from "../images/carouselimage1.svg";
import banner2 from "../images/carouselimage2.svg";
import banner3 from "../images/carouselimage3.svg";
import { Carousel } from 'react-bootstrap';
const slides = [
    {
      src: banner1,
     
    },
    {
      src:banner2,
     
    },
    {
      src:banner3,
    }
  ];
function CarouselDemo()
{
    return(
        <Carousel controls={false} indicators={false} interval={3000} fade>
        {slides.map((slide, index) => (
          <Carousel.Item key={index} className="zoom">
            <img
              className="d-block w-100 img-fluid"
              src={slide.src}
              alt={`Slide ${index + 1}`}
            />
            {/* <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>

    )
}
export default CarouselDemo;