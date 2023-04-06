import {StyledSection} from "./StyledSection";
import { Layout, Avatar, Row, Col, Divider, Space } from 'antd';
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import PortfolioDisplay from "./PortfolioDisplay";
import DatePicker from "./DatePicker";
import ContactCard from "./ContactCard";

const {Sider, Content} = Layout;




const PhotographerInfo = ({profile}) => {
    return ( 
        <>
                            <StyledSection>
                    <Layout>
                    <Content style={{borderRight: "1px solid rgba(0,0,0,0.1)", minHeight: 280, padding: '30px'}}>
                    <Space direction="vertical" size={30} style={{ display: 'flex'}}>
                        <p> <Link to='/' style={{color: "#1c5b85"}}> <LeftOutlined /> Back to Homepage </Link> </p>
                        <Row align="middle">
                        <Col span={9}><Avatar src={`${import.meta.env.BASE_URL}/images/Profile/Avatar/1.jpg`} size={150}/> </Col>
                        <Col span={15}>
                            <Space direction="vertical" size={10}>
                            <h2>Hi my name is {profile.fullName}</h2>
                            <p style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad ea in inventore quisquam amet repudiandae incidunt voluptatum cumque atque maiores consectetur sunt voluptas, dignissimos totam? Ex sed magnam nostrum illum voluptatibus provident, laborum amet?</p>
                            </Space>
                        </Col>
                        </Row>
                    </Space>
                    <Divider/>
                        <Row align="middle" justify="space-between">
                            <Col span={10}>
                            <Space direction="vertical" size={3}>
                                <h4>Age : {profile.age} </h4>
                                <h4>Gender : {profile.gender} </h4>
                                <h4>Location : {profile.address} </h4>
                                </Space>
                            </Col>
                            <Col span={10} >
                            <Space direction="vertical" size={3}>
                                <h4>Province : {profile.province} </h4>
                                <h4>Specialization : {profile.specialization} </h4>
                                <h4>Charges : {profile.amount} / {profile.basis} </h4>
                                </Space>
                            </Col>
                        </Row>
                        <Divider/>

                    <Row justify="center">
                    <Col span={15}>
                            <h2 style={{textAlign: "center", margin: "25px 0px"}}> Portfolio </h2>
                            <PortfolioDisplay/>
                    </Col>
                    </Row>
                    </Content>
                    <Sider style={{padding: '30px', background: "#f7f7f7"}} width={350}>
                    <Space direction="vertical" size={30} style={{ display: 'flex', alignItems:"center"}}>
                    <Row justify="center">
                        <Col>
                        <Space direction="vertical" size={40}>
                            <h2 style={{textAlign:"center"}}>Check Availability </h2>
                            <DatePicker/>
                            <ContactCard email={profile.email} phone={profile.phone}/>
                            <p> <b> Important Note: </b> <br/>
                            Requesting a date does not guarantee photographer availability. The photographer will confirm the date and time within 24 hours once they receive your request.</p>
                        </Space>
                        </Col>
                    </Row>
                    </Space>
                    </Sider>
                    </Layout>
                </StyledSection>
        
        </>
     );
}
 
export default PhotographerInfo;