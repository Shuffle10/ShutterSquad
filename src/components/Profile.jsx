import { useParams } from "react-router-dom";
import styled from "styled-components";
import PhotographerInfo from "./PhotographerInfo";
import { useEffect, useState } from "react";
import { Spin } from "antd";
import axios from "axios";



const CoverWrapper = styled.div`
    height:70vh;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

const PageWrapper = styled.div`
min-height: 100vh;
`
const SpinWrapper = styled.div`
    min-height: 100vh;
    min-width: 100vq;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Profile = () => {
    
    
    const [profile, setProfile] = useState();

    
    const {_id} = useParams()

    
  useEffect(() => {
    window.scrollTo(0, 0);
        async function fetchPhotographer() {
      const response = await axios.get(`http://localhost:8000/api/photographer/${_id}`);
      setProfile(response.data);
    }
    fetchPhotographer();
  }, [_id]);

  if (!profile) {
    return <PageWrapper> <SpinWrapper><Spin size="large"></Spin></SpinWrapper> </PageWrapper>
  }

    return ( 
        <PageWrapper>


                <>
                <CoverWrapper>
                <img src={profile.coverPhoto}/>
                </CoverWrapper>
                
                        <PhotographerInfo profile={profile}/>
                
                </>

        </PageWrapper>
     );
}

 
export default Profile;