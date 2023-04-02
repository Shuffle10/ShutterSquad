import HomeBanner from "./HomeBanner";
import UserGuide from "./UserGuide";
import styled from "styled-components";
import PopularProfiles from "./PopularProfiles";
import Testimonials from "./Testimonials"
import Clients from "./Clients";



const StyledSection = styled.section`
    padding: 150px 250px;
    background-color: ${props=>props.color};
    

    h3{
        text-align: center;
        margin-bottom: 100px;
        font-size: 45px;
        color: #1c5b85;
    }
`

const Home = () => {
    return ( 
        <>
        <HomeBanner/>
        <StyledSection> 
            <h3>Celebrate your story through photography!</h3>
            <UserGuide/>
        </StyledSection>
        <StyledSection color={"#f7f7f7"}> 
            <PopularProfiles/>
        </StyledSection>
        <StyledSection>
            <h3>Our Trusted Partners</h3>
            <Clients/>
        </StyledSection>
        <StyledSection color={"#f7f7f7"}>
            <Testimonials/>
        </StyledSection>
        
        </>
     );
}
 
export default Home;