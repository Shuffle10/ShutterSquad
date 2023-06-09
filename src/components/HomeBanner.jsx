import styled from "styled-components";
import bannerImage from "/images/Banner/banner.jpeg"
import Navbar from "./Navbar";
import BannerContent from "./BannerContent";


const StyledBanner = styled.div`
    position: relative;
    height: 100vh;
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