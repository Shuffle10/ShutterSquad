import { Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";




const StyledBannerContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    gap: 50px;
    color: whitesmoke;

    h2{
        font-size: 54px;
    }

    p{
        font-size: 30px
    }

    input{
        height: 50px;
        width: 800px;
        color: whitesmoke;
        font-size: 22px;
        padding: 0px 20px;
        border: none;
        border-radius: 20px;
        background: rgba(255,255,255,0.3);

    }

`


const BannerContent = () => {

    const navigate=useNavigate()
    const [search, setSearch] = useState('')

    return ( 
        <>
        <StyledBannerContent>
        <h2>Find Professional Photographers Near You!</h2>
        <p>Hire professionals at a price as low as Rs. 10,000</p>
        <Form onFinish={()=>navigate(`/search/${search}`)}>
        <Input name="province" placeholder="Search with your province name" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </Form>
        </StyledBannerContent>
        </>
     );
}
 
export default BannerContent;