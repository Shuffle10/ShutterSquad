import styled from "styled-components";
import { Button } from 'antd';
import {useNavigate} from 'react-router-dom'
import ProfileCard from "./ProfileCard";
import useFetch from "../hooks/useFetch";




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
     const {data: profiles, loading} = useFetch();



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