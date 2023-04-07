import styled from "styled-components";
import { Button, Spin } from 'antd';
import {useNavigate} from 'react-router-dom'
import ProfileCard from "./ProfileCard";





const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 75px;
`
const StyledButton = styled.div`
  .ant-btn{
    height: 40px;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
  }
`


const PopularProfiles = ({profiles, loading}) => {

    const navigate = useNavigate()

    return ( 
    <>
            <CardWrapper>
            {loading==true?<><Spin size="large"><div className="content" /></Spin></>:<>
            {profiles.slice(profiles.length-3,profiles.length).map((profile)=>(
                <ProfileCard profile={profile} loading={loading}/>
            ))}         
            </>}
            </CardWrapper>
            <StyledButton><Button type="primary" style={{display:"block", margin:"0px auto", marginTop:"50px"}} onClick={()=> navigate('/search/')}> View More </Button> </StyledButton>
            </>                    
    );
}
 
export default PopularProfiles;