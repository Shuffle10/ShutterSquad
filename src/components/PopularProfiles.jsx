import styled from "styled-components";
import { CameraOutlined, VideoCameraOutlined, DollarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Avatar,Card, Button } from 'antd';
import {Link, useNavigate} from 'react-router-dom'
const { Meta } = Card;
import ProfileCard from "./ProfileCard";



const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const StyledButton = styled.div`
  .ant-btn{
    height: 40px;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
  }
`


const PopularProfiles = () => {

    const navigate = useNavigate()

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

        },

        {
            id: 4,
            name: "Arayn Raj",
            province: "Sudurpaschim",
            specialization: "Videography",
            city: "Doti",
            fees : 76000,
            per: "day",
            coverPhoto:`${import.meta.env.BASE_URL}/images/Profile/Cover/3.jpg`,
            avatar: `${import.meta.env.BASE_URL}/images/Profile/Avatar/3.jpeg`,
            location : "Doti, Doti"

        }
    ];


    return ( 
    <>
            <CardWrapper>
            {profiles.slice(0,3).map((profile)=>(
                <ProfileCard profile={profile}/>
            ))}
            </CardWrapper>
            <StyledButton><Button type="primary" style={{display:"block", margin:"0px auto", marginTop:"50px"}} onClick={()=> navigate('/search/')}> View More </Button> </StyledButton>
            </>                    
    );
}
 
export default PopularProfiles;