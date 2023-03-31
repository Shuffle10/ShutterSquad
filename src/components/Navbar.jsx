import { Button } from "antd";
import styled from "styled-components";


const StyledNav = styled.nav`
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to right, #dbfaff,#ADD8E6);
  font-size: 18px;
  padding: 15px 100px;

  .nav-items{
    display: flex;
  }

  ul{
    display:flex;
    gap: 20px;
    margin-right: 20px;
    align-items: center;


    .navlist-items{
      cursor: pointer;
    }
  }

  
`

const StyledButton = styled.div`
  .ant-btn{
    height: 40px;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
  }
`


const Navbar = () => {
  return ( 
     <StyledNav>
      <div className="logo-container">
        Logo Here
      </div>
      <div className="nav-items">
        <ul>
          <li className="navlist-items">User Guide</li>
          <li className="navlist-items">Categories</li>
        </ul>
        <StyledButton> <Button> Register </Button></StyledButton>
      </div>
     </StyledNav>
   );
}
 
export default Navbar;