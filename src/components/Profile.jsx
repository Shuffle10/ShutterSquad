import { useParams } from "react-router-dom";
import styled from "styled-components";
import PhotographerInfo from "./PhotographerInfo";
import { useEffect } from "react";



const CoverWrapper = styled.div`
    height:70vh;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`



const Profile = ({profiles}) => {
    
    const {_id} = useParams()
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return ( 
        <>
            {(profiles.filter((e)=>e._id==_id)).map((profile)=>(
                <>
                <CoverWrapper>
                <img src={profile.coverPhoto}/>
                </CoverWrapper>
                
                        <PhotographerInfo profile={profile}/>
                
                </>
            ))}
        </>
     );
}
 
export default Profile;