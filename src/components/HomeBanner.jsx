import styled from "styled-components";
import bannerImage from "../../public/images/banner.jpeg"
import Navbar from "./Navbar";
import BannerContent from "./BannerContent";


const StyledBanner = styled.div`
    height: 95vh;
    background-image: url(${bannerImage});
    background-repeat: no-repeat;
    background-size: cover;
`

const HomeBanner = () => {
    return ( 
        <>
        <StyledBanner className="home-banner">
        <BannerContent/>
        </StyledBanner>
        </>
     );
}
 
export default HomeBanner;