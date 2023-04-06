import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const SearchbarWrapper =  styled.div`
    input{
        height: 50px;
        font-size: 22px;
        padding: 0px 20px;
        border: none;
        border-radius: 20px;
        background: white;
        margin: 100px 0px;
    }
`

const SearchBar = ({search, setSearch}) => {

    const navigate = useNavigate()


    return ( 
        <>
        <SearchbarWrapper>
        <Form onFinish={()=>navigate(`/search/${search}`)}>
        <Input name="province" placeholder="Search with your province or address" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </Form>
        </SearchbarWrapper>
        </>
     );
}
 
export default SearchBar;