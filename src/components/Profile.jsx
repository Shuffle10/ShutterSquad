import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Affix } from 'antd';
import PhotographerInfo from "./PhotographerInfo";



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
            age: 19,
            email: "saphal@gmail.com",
            phone: "9845385206",
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
            age: 19,
            email: "saphal@gmail.com",
            phone: "9845385206",
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
            age: 19,
            email: "saphal@gmail.com",
            phone: "9845385206",
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
                
                        <PhotographerInfo profile={profile}/>
                
                </>
            ))}
        </>
     );
}
 
export default Profile;