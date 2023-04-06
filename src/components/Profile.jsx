import { useParams } from "react-router-dom";
import styled from "styled-components";
import PhotographerInfo from "./PhotographerInfo";
import useFetch from "../hooks/useFetch";



const CoverWrapper = styled.div`
    height:70vh;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`



const Profile = () => {
    
    const {_id} = useParams()

    const {data: profiles, loading} = useFetch();    

    return ( 
        <>
            {(profiles.filter((e)=>e._id==_id)).map((profile)=>(
                <>
                <CoverWrapper>
                <img src={`${import.meta.env.BASE_URL}/images/Profile/Cover/1.jpg`}/>
                </CoverWrapper>
                
                        <PhotographerInfo profile={profile}/>
                
                </>
            ))}
        </>
     );
}
 
export default Profile;