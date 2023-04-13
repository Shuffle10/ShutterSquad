import { Button } from "antd";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom"
import * as Scroll from 'react-scroll';
import { HashLink as InternalLink } from 'react-router-hash-link';
import { logoutUser } from "../services/clientAPI";

const NavWrapper = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;

  nav{
      display:flex;
      justify-content: space-between;
      align-items: center;
      background-color: transparent ; 
      // rgb(213 210 207)
      font-size: 18px;
      padding: 15px 100px;
      font-size: 20px;



  .nav-items{
    display: flex;
  }

  ul{
    display:flex;
    gap: 25px;
    align-items: center;


    .navlist-items{
      color: white;
      cursor: pointer;
    }
  }
}
`

const StyledButton = styled.div`
  .ant-btn{
    height: 45px;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
  }
`


const Navbar = () => {

const {logout} = logoutUser()

const handleLogout = () => {
  logout()
}

const navigate = useNavigate()

  return ( 
     <NavWrapper>
      <nav>
      <div className="logo-container">
        <Link to="/"> ShutterSquad </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li className="navlist-items"> <InternalLink to='/#user-guide' smooth={true}>User Guide</InternalLink></li>
          <li className="navlist-items"><InternalLink to='/#about-us' smooth={true}>About Us</InternalLink></li>
        <StyledButton><Button type="primary" onClick={handleLogout}>Logout</Button></StyledButton>
        <StyledButton><Button type="primary"><Link to='/register'>Register</Link></Button></StyledButton>
        <StyledButton><Button type="primary"><Link to='/login'>Login</Link></Button></StyledButton>
        </ul>
      </div>
      </nav>
     </NavWrapper>
   );
}
 
export default Navbar;