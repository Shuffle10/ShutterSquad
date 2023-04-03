import styled from "styled-components";
import { CameraOutlined, VideoCameraOutlined, DollarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Avatar,Card, Button } from 'antd';
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
            name: "Saphal Pant",
            province: "Bagmati",
            specialization: "Photography",
            city: "Kathmandu",
            fees : 20000,
            per: "day",
            coverPhoto: "../../src/images/Profile/Cover/1.jpg",
            avatar: "../../src/images/Profile/Avatar/1.jpg",
            location : "Nagarjun, Kathmandu"
        },

        {
            name: "Roshan Giri",
            province: "Lumbini",
            specialization: "Videography",
            city: "Butwal",
            fees : 1000,
            per: "hour",
            coverPhoto: "../../src/images/Profile/Cover/2.jpg",
            avatar: "../../src/images/Profile/Avatar/2.jpeg",
            location : "Batauli Bazar, Butwal"

        },

        {
            name: "Rojan Raj",
            province: "Koshi",
            specialization: "Photography",
            city: "Jhapa",
            fees : 50000,
            per: "day",
            coverPhoto: "../../src/images/Profile/Cover/3.jpg",
            avatar: "../../src/images/Profile/Avatar/3.jpeg",
            location : "Damak, Jhapa"

        }
    ];


    return ( 
    <>
        {/* <FeaturedSection> */}
            <CardWrapper>
            {profiles.map((profile)=>(
                <>
                    <StyledCard>
                    <Card
                        hoverable
                        cover={
                        <img
                            alt="example"
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
                    </StyledCard>
                </>
            ))}
            </CardWrapper>
            <StyledButton><Button type="primary" style={{display:"block", margin:"0px auto", marginTop:"50px"}}> View More </Button> </StyledButton>
            {/* </FeaturedSection>    */}
            </>                    
    );
}
 
export default PopularProfiles;