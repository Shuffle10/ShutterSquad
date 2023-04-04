import styled from "styled-components";
import { CameraOutlined, VideoCameraOutlined, DollarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Avatar,Card, Button } from 'antd';
import {Link} from 'react-router-dom'
const { Meta } = Card;



const StyledCard = styled.div`
    width: 400px;
`
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
            <CardWrapper>
            {profiles.map((profile)=>(
                <>
                    <StyledCard>
                    <Link to={`/profile/${profile.id}`}>
                    <Card
                        hoverable
                        cover={
                        <img
                            alt="Cover Photo"
                            src={profile.coverPhoto}
                        />
                        }

                            actions={[
                                <> <DollarOutlined/>{profile.fees}/{profile.per}</>,
                                <>  <CameraOutlined style={{display: "inline"}}/>&nbsp;&nbsp;/&nbsp;&nbsp;<VideoCameraOutlined style={{display: "inline"}}/> <br/><span>{profile.specialization}</span></>,
                                <> <EnvironmentOutlined/>{profile.province}</>,
                                ]}
                    >
                        <Meta
                        avatar={<Avatar src={profile.avatar} />}
                        title={profile.name}
                        description={profile.location}
                        />
                    </Card>
                    </Link>
                    </StyledCard>
                </>
            ))}
            </CardWrapper>
            <StyledButton><Button type="primary" style={{display:"block", margin:"0px auto", marginTop:"50px"}}> View More </Button> </StyledButton>
            </>                    
    );
}
 
export default PopularProfiles;