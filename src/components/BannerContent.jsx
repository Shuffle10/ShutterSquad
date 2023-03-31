import { Input } from "antd";
import styled from "styled-components";


const StyledBannerContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 93%;
    background-color: rgba(0,0,0,0.5);

    h2{
        font-size: 54px;
        margin-bottom: 50px;
        color: whitesmoke;
    }

    input{
        height: 50px;
        width: 800px;
        font-size: 22px;
        padding: 0px 20px;
        border: none;
        border-radius: 20px;

        &:focus{
            outline: none;
        }
    }

`


const BannerContent = () => {
    return ( 
        <>
        <StyledBannerContent>
        <h2>Hire Professional Photographers Near You!</h2>
        <Input placeholder="Search with your city name" />
        </StyledBannerContent>
        </>
     );
}
 
export default BannerContent;