import { useParams } from "react-router-dom";
import styled from "styled-components";
import {StyledSection} from "./StyledSection";



const CoverWrapper = styled.div`
    height:70vh;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

const Profile = () => {
    
    const {id} = useParams()
    const profiles = [
        {
            id: 1,
            name: "Saphal Pant",
            province: "Bagmati",
            specialization: "Photography",
            city: "Kathmandu",
            fees : 20000,
            per: "day",
            coverPhoto: `${import.meta.env.BASE_URL}/images/Profile/Cover/1.jpg`,
            avatar: `${import.meta.env.BASE_URL}/images/Profile/Avatar/1.jpg`,
            location : "Nagarjun, Kathmandu"
        },

        {
            id: 2,
            name: "Roshan Giri",
            province: "Lumbini",
            specialization: "Videography",
            city: "Butwal",
            fees : 1000,
            per: "hour",
            coverPhoto: `${import.meta.env.BASE_URL}/images/Profile/Cover/2.jpg`,
            avatar: `${import.meta.env.BASE_URL}/images/Profile/Avatar/2.jpeg`,
            location : "Batauli Bazar, Butwal"

        },

        {
            id: 3,
            name: "Rojan Raj",
            province: "Koshi",
            specialization: "Photography",
            city: "Jhapa",
            fees : 50000,
            per: "day",
            coverPhoto:`${import.meta.env.BASE_URL}/images/Profile/Cover/3.jpg`,
            avatar: `${import.meta.env.BASE_URL}/images/Profile/Avatar/3.jpeg`,
            location : "Damak, Jhapa"

        }
    ];

    return ( 
        <>
            {(profiles.filter((e)=>e.id==id)).map((profile)=>(
                <>
                <CoverWrapper>
                <img src={profile.coverPhoto}/>
                </CoverWrapper>
                <StyledSection>

                </StyledSection>

                {/* <h2>Hi my name is {profile.name}</h2>
                <p> I am good at {profile.specialization}</p> */}
                </>
            ))}
        </>
     );
}
 
export default Profile;