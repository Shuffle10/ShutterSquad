import { Carousel, Image } from "antd";
import styled from "styled-components";



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
            src="../src/images/Testimonials/2.jpg"
        />
        </div>
        <div>
        <Image
        height={50+'vh'}

            src="../src/images/Testimonials/3.jpg"
        />
        </div>
        <div>
        <Image
        height={50+'vh'}
            src="../src/images/Testimonials/4.jpg"
        />
        </div>
        <div>
        <Image
        height={50+'vh'}
            src="../src/images/Testimonials/5.jpg"
        />
        </div>
        </Carousel>
    </StyledCarousel>
    </> );
}
 
export default Testimonials;