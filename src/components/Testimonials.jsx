import { Carousel, Image } from "antd";
import styled from "styled-components";
import testimonial1 from "../../src/images/Testimonials/1.jpg"
import testimonial2 from "../../src/images/Testimonials/2.jpg"
import testimonial3 from "../../src/images/Testimonials/3.jpg"
import testimonial4 from "../../src/images/Testimonials/4.jpg"



const StyledCarousel = styled.div`
    .slick-slide{
        height: 50vh;
    }
`

const Testimonials = () => {
    return ( 
    <>
    <StyledCarousel>
        <Carousel autoplay>
        <div>
        <Image
        height={50+'vh'}
            src={testimonial1}
        />
        </div>
        <div>
        <Image
        height={50+'vh'}

            src={testimonial2}
        />
        </div>
        <div>
        <Image
        height={50+'vh'}
            src={testimonial3}
        />
        </div>
        <div>
        <Image
        height={50+'vh'}
            src={testimonial4}
        />
        </div>
        </Carousel>
    </StyledCarousel>
    </> );
}
 
export default Testimonials;