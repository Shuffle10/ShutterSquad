import HomeBanner from "./HomeBanner";
import UserGuide from "./UserGuide";
import styled from "styled-components";
import PopularProfiles from "./PopularProfiles";
import Testimonials from "./Testimonials"
import Clients from "./Clients";
import WhyUs from "./WhyUs";
import {StyledSection} from "./StyledSection";


const Home = () => {
    return ( 
        <>
        <HomeBanner/>
        <StyledSection> 
            <h3 id="guide">Celebrate your story through photography!</h3>
            <UserGuide/>
        </StyledSection>
        <StyledSection color={"#f7f7f7"}> 
            <PopularProfiles/>
        </StyledSection>
        <StyledSection>
            <h3>Why ShutterSquad?</h3>
            <WhyUs/>
        </StyledSection>
        <StyledSection  color={"#f7f7f7"}>
            <Testimonials/>
        </StyledSection> 
        <StyledSection>
        <h3>Our Valuable Clients</h3>
            <Clients/>
        </StyledSection>       
        </>
     );
}
 
export default Home;