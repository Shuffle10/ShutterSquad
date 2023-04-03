import { Button } from "antd";
import styled from "styled-components";
import {Link} from "react-router-dom"
import * as Scroll from 'react-scroll';

const InternalLink = Scroll.Link;

const StyledNav = styled.nav`
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(213 210 207); 
  font-size: 18px;
  padding: 15px 100px;

  .nav-items{
    display: flex;
  }

  ul{
    display:flex;
    gap: 25px;
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
        <Link to="/"> ShutterSquad </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li className="navlist-items"> <InternalLink to='guide' smooth={true}>User Guide</InternalLink></li>
          <li className="navlist-items"><Link to='/categories'>Categories</Link></li>
        <StyledButton><Button type="primary"><Link to='/register'>Register</Link></Button></StyledButton>
        <StyledButton><Button type="primary"><Link to='/login'>Login</Link></Button></StyledButton>
        </ul>
      </div>
     </StyledNav>
   );
}
 
export default Navbar;