import { Button } from "antd";
import styled from "styled-components";
import {Link} from "react-router-dom"


const StyledNav = styled.nav`
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  font-size: 18px;
  padding: 15px 100px;

  .nav-items{
    display: flex;
  }

  ul{
    display:flex;
    gap: 40px;
    margin-right: 40px;
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
          <li className="navlist-items"> <Link to='/guide'>User Guide</Link></li>
          <li className="navlist-items"><Link to='/categories'>Categories</Link></li>
        </ul>
        <StyledButton><Button><Link to='/register'>Register</Link></Button></StyledButton>
      </div>
     </StyledNav>
   );
}
 
export default Navbar;