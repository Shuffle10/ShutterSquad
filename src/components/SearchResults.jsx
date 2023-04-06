import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import SearchBar from "./Searchbar";
import { StyledSection } from "./StyledSection";
import styled from "styled-components";
import { useState } from "react";


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
    console.log(province)
    const [search, setSearch] = useState(province)

    const profiles = [
        {
            id: 1,
            name: "Saphal Pant",
            province: "Bagmati",
            specialization: "Photography",
            city: "Kathmandu",
            fees : 20000,
            per: "day",
            coverPhoto: `${import.meta.env.BASE_URL}/images/Profile/Cover/1.jpg`,
            avatar: `${import.meta.env.BASE_URL}/images/Profile/Avatar/1.jpg`,
            location : "Nagarjun, Kathmandu"
        },

        {
            id: 2,
            name: "Roshan Giri",
            province: "Lumbini",
            specialization: "Videography",
            city: "Butwal",
            fees : 1000,
            per: "hour",
            coverPhoto: `${import.meta.env.BASE_URL}/images/Profile/Cover/2.jpg`,
            avatar: `${import.meta.env.BASE_URL}/images/Profile/Avatar/2.jpeg`,
            location : "Batauli Bazar, Butwal"

        },

        {
            id: 3,
            name: "Rojan Raj",
            province: "Koshi",
            specialization: "Photography",
            city: "Jhapa",
            fees : 50000,
            per: "day",
            coverPhoto:`${import.meta.env.BASE_URL}/images/Profile/Cover/3.jpg`,
            avatar: `${import.meta.env.BASE_URL}/images/Profile/Avatar/3.jpeg`,
            location : "Damak, Jhapa"

        },

        {
            id: 1,
            name: "Saphal Pant",
            province: "Bagmati",
            specialization: "Photography",
            city: "Kathmandu",
            fees : 20000,
            per: "day",
            coverPhoto: `${import.meta.env.BASE_URL}/images/Profile/Cover/1.jpg`,
            avatar: `${import.meta.env.BASE_URL}/images/Profile/Avatar/1.jpg`,
            location : "Nagarjun, Kathmandu"
        },

        {
            id: 2,
            name: "Roshan Giri",
            province: "Lumbini",
            specialization: "Videography",
            city: "Butwal",
            fees : 1000,
            per: "hour",
            coverPhoto: `${import.meta.env.BASE_URL}/images/Profile/Cover/2.jpg`,
            avatar: `${import.meta.env.BASE_URL}/images/Profile/Avatar/2.jpeg`,
            location : "Batauli Bazar, Butwal"

        },

        {
            id: 3,
            name: "Rojan Raj",
            province: "Koshi",
            specialization: "Photography",
            city: "Jhapa",
            fees : 50000,
            per: "day",
            coverPhoto:`${import.meta.env.BASE_URL}/images/Profile/Cover/3.jpg`,
            avatar: `${import.meta.env.BASE_URL}/images/Profile/Avatar/3.jpeg`,
            location : "Damak, Jhapa"

        },

        {
            id: 1,
            name: "Saphal Pant",
            province: "Bagmati",
            specialization: "Photography",
            city: "Kathmandu",
            fees : 20000,
            per: "day",
            coverPhoto: `${import.meta.env.BASE_URL}/images/Profile/Cover/1.jpg`,
            avatar: `${import.meta.env.BASE_URL}/images/Profile/Avatar/1.jpg`,
            location : "Nagarjun, Kathmandu"
        },

        {
            id: 2,
            name: "Roshan Giri",
            province: "Lumbini",
            specialization: "Videography",
            city: "Butwal",
            fees : 1000,
            per: "hour",
            coverPhoto: `${import.meta.env.BASE_URL}/images/Profile/Cover/2.jpg`,
            avatar: `${import.meta.env.BASE_URL}/images/Profile/Avatar/2.jpeg`,
            location : "Batauli Bazar, Butwal"

        },

        {
            id: 3,
            name: "Rojan Raj",
            province: "Koshi",
            specialization: "Photography",
            city: "Jhapa",
            fees : 50000,
            per: "day",
            coverPhoto:`${import.meta.env.BASE_URL}/images/Profile/Cover/3.jpg`,
            avatar: `${import.meta.env.BASE_URL}/images/Profile/Avatar/3.jpeg`,
            location : "Damak, Jhapa"

        }
    ];

    return ( <>
    <PageWrapper>
    <StyledSection>
    <SearchBar search={search} setSearch={setSearch}/>
    <CardWrapper>
    {province==undefined?<>{profiles.map((profile)=>(
                <ProfileCard profile={profile}/>
    ))}</>:<>{(profiles.filter((profile)=>(profile.province).includes(search)||(profile.location).includes(search))).map((profile)=>(
                <ProfileCard profile={profile}/>
    ))}</>}
    
    </CardWrapper>
    </StyledSection>
    </PageWrapper>
    </> );
}
 
export default SearchResults;