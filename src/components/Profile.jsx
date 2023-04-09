import { useParams } from "react-router-dom";
import styled from "styled-components";
import PhotographerInfo from "./PhotographerInfo";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Spin } from "antd";



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


const Profile = () => {
    const {data: profiles, loading} = useFetch();

    
    const {_id} = useParams()
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);



    return ( 
        <PageWrapper>

            {(profiles.filter((e)=>e._id==_id)).map((profile)=>(
                <>
                <CoverWrapper>
                <img src={profile.coverPhoto}/>
                </CoverWrapper>
                
                        <PhotographerInfo profile={profile}/>
                
                </>
            ))}

        </PageWrapper>
     );
}

 
export default Profile;