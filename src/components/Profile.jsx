import { useParams } from "react-router-dom";
import styled from "styled-components";
import {StyledSection} from "./StyledSection";
import { Layout, Menu, Avatar, Row, Col, Divider, Space } from 'antd';
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const {Sider, Content} = Layout;



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
                    <Layout>
                    <Content style={{ padding: '30px', minHeight: 280 }}>
                    <Space direction="vertical" size={30} style={{ display: 'flex'}}>
                        <p> <Link to='/' style={{color: "#1c5b85"}}> <LeftOutlined /> Back to Homepage </Link> </p>
                        <Row align="middle">
                        <Col span={6}><Avatar src={profile.avatar} size={150}/> </Col>
                        <Col span={12}>
                            <Space direction="vertical" size={10}>
                            <h2>Hi my name is {profile.name}</h2>
                            <p style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad ea in inventore quisquam amet repudiandae incidunt voluptatum cumque atque maiores consectetur sunt voluptas, dignissimos totam? Ex sed magnam nostrum illum voluptatibus provident, laborum amet?</p>
                            </Space>
                        </Col>
                        </Row>
                    <Divider/>
                    </Space>
                    </Content>
                    <Sider style={{ background: "gray" }} width={500}>
                        Calendar and Important Note
                    </Sider>
                    </Layout>
                </StyledSection>

                {/* <p> I am good at {profile.specialization}</p> */}
                </>
            ))}
        </>
     );
}
 
export default Profile;