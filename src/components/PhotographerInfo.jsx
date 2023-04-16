import {StyledSection} from "./StyledSection";
import { Layout, Avatar, Row, Col, Divider, Space, Button, message } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { LeftOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import PortfolioDisplay from "./PortfolioDisplay";
import DatePicker from "./DatePicker";
import ContactCard from "./ContactCard";
import styled from "styled-components";
import { useAuthContext } from "../hooks/useContext";
import { useState } from "react";
import { deleteProfile, logoutUser } from "../services/clientAPI";

const {Sider, Content} = Layout;

const StyledButton = styled.div`
  .ant-btn{
    height: 35px;
    font-family: 'Lato', sans-serif;
    font-size: 15px;
}
`

const InfoWrapper = styled.div`
display: flex;
flex-direction : column;
gap: 20px;
align-items: flex-end;
`




const PhotographerInfo = ({profile}) => {
    
    const {user} = useAuthContext()
    const {deleteUser} = deleteProfile()
    const {logout} = logoutUser()

    const navigate = useNavigate()


    const [loading, setLoading] = useState(false)
    
    const handleDelete = async (id) => {
        setLoading(true)
        try{
            await deleteUser(id)
            logout()
            navigate("/", {
                state: { message: "Profile Deleted!" },
              });
            setLoading(false)
        }catch(err){
            console.log(err)
        }
    }



    return ( 
        <>
                    <StyledSection>
                    <Layout>
                    <Content style={{borderRight: "1px solid rgba(0,0,0,0.1)", minHeight: 280, padding: '30px'}}>
                    <Space direction="vertical" size={30} style={{ display: 'flex'}}>
                        <p> <Link to='/' style={{color: "#1c5b85"}}> <LeftOutlined /> Back to Homepage </Link> </p>
                        <Row align={"middle"} justify={"space-between"}>
                        <Col ><Avatar src={profile.avatar} size={150}/> </Col>
                        <Col>
                        <Space direction="vertical" size={15}>
                            <h2>Hi, my name is {profile.fullName}.</h2>
                            <p style={{fontSize:"15px"}}>{profile.bio}</p>
                            
                            {user && (user.email==profile.email) &&
                            <div style={{display:"flex", gap: "15px"}}>
                            <StyledButton><Button type="primary" style={{backgroundColor:"#5cad5c"}}><Link to={`/edit/${profile._id}`}><EditOutlined /> &nbsp;&nbsp;Edit Profile</Link></Button></StyledButton>
                            <StyledButton><Button type="primary" style={{backgroundColor:"#eb4034"}} onClick={()=>handleDelete(profile._id)} loading={loading}><DeleteOutlined /> &nbsp;&nbsp;Delete Profile</Button></StyledButton>
                            </div>}
                            </Space>
                        </Col>
                        </Row>
                    </Space>
                    <Divider/>
                        <Row align="middle" justify={"space-between"}>
                            <Col>
                            <Space direction="vertical" size={3}>
                                <h4>Age : {profile.age} </h4>
                                <h4>Gender : {profile.gender} </h4>
                                <h4>Location : {profile.address} </h4>
                                </Space>
                            </Col>
                            <Col >
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
                    <Sider breakpoint="lg" collapsedWidth="300" width="350" style={{padding: '30px', background: "#f7f7f7"}}>
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