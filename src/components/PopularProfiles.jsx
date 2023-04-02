import styled from "styled-components";
import { CameraOutlined, VideoCameraOutlined, DollarOutlined, PushpinOutlined } from '@ant-design/icons';
import { Avatar,Card, Row, Col } from 'antd';
const { Meta } = Card;

const StyledCard = styled.div`
    width: 400px;
`
const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`


const PopularProfiles = () => {

    const profiles = [
        {
            name: "Saphal Pant",
            province: "Bagmati",
            specialization: "Photography",
            city: "Kathmandu",
            fees : 20000,
            per: "day",
            coverPhoto: "../src/images/Profile/Cover/1.jpg",
            avatar: "../src/images/Profile/Avatar/1.jpg"

        },

        {
            name: "Roshan Giri",
            province: "Lumbini",
            specialization: "Videography",
            city: "Butwal",
            fees : 1000,
            per: "hour",
            coverPhoto: "../src/images/Profile/Cover/2.jpg",
            avatar: "../src/images/Profile/Avatar/2.jpeg"


        },

        {
            name: "Rojan Raj",
            province: "Koshi",
            specialization: "Photography",
            city: "Jhapa",
            fees : 50000,
            per: "day",
            coverPhoto: "../src/images/Profile/Cover/3.jpg",
            avatar: "../src/images/Profile/Avatar/3.jpeg"

        }
    ];


    return ( 
            <CardWrapper>
            {profiles.map((profile)=>(
                <>
                    <StyledCard>
                    <Card
                        cover={
                        <img
                            alt="example"
                            src={profile.coverPhoto}
                        />
                        }

                            actions={[
                                <> <DollarOutlined/> <span>{profile.fees}/{profile.per}</span></>,
                                <>  <CameraOutlined style={{display: "inline"}}/>&nbsp;&nbsp;/&nbsp;&nbsp;<VideoCameraOutlined style={{display: "inline"}}/> <br/><span>{profile.specialization}</span></>,
                                <> <PushpinOutlined /> <span>{profile.province}</span></>,
                                ]}
                    >
                        <Meta
                        avatar={<Avatar src={profile.avatar} />}
                        title={profile.name}
                        />
                    </Card>
                    </StyledCard>
                </>
            ))}
            </CardWrapper>

    );
}
 
export default PopularProfiles;