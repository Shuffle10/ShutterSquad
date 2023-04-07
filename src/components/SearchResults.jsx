import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import SearchBar from "./Searchbar";
import { StyledSection } from "./StyledSection";
import styled from "styled-components";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Capitalize from "../services/capitalize";



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

const SearchResults = ({profiles}) => {
    const {province} = useParams()
    const [search, setSearch] = useState(province)




    return ( <>
    <PageWrapper>
    <StyledSection>
    <SearchBar search={search} setSearch={setSearch}/>
    <CardWrapper>
    {province==undefined?<>{profiles.map((profile)=>(
                <ProfileCard profile={profile}/>
    ))}</>:<>{(profiles.filter((profile)=>(profile.province.toLowerCase()).includes((search.toLowerCase()))||(profile.address.toLowerCase()).includes(search.toLowerCase()))).map((profile)=>(
                <ProfileCard profile={profile}/>
    ))}</>}
    
    </CardWrapper>
    </StyledSection>
    </PageWrapper>
    </> );
}
 
export default SearchResults;