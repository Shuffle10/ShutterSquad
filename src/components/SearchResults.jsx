import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import SearchBar from "./Searchbar";
import { StyledSection } from "./StyledSection";
import styled from "styled-components";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Spin } from "antd";



const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px;
`

const PageWrapper = styled.div`
    min-height: 100vh;
    background-color: #cfcfcf;
`

const SearchResults = () => {
    const {province} = useParams()
    const [search, setSearch] = useState(province)
    
    const {data: profiles, loading} = useFetch();





    return ( <>
    <PageWrapper>
    
    <StyledSection>          
    <SearchBar search={search} setSearch={setSearch}/>
    {loading==true?<><Spin size="large"  style={{justifySelf:"center"}}></Spin></>:<>
    <CardWrapper>
    {province==undefined?<>{profiles.map((profile)=>(
                <ProfileCard profile={profile}  key={profile._id}/>
    ))}</>:<>{(profiles.filter((profile)=>(profile.province.toLowerCase()).includes((search.toLowerCase()))||(profile.address.toLowerCase()).includes(search.toLowerCase()))).map((profile)=>(
                <ProfileCard profile={profile}/>
    ))}</>} 
    </CardWrapper>
    </>}
    
    </StyledSection>
    </PageWrapper>
    </> );
}
 
export default SearchResults;