import { Button } from "antd";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom"
import * as Scroll from 'react-scroll';

const InternalLink = Scroll.Link;

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

const navigate = useNavigate()

  return ( 
     <NavWrapper>
      <nav>
      <div className="logo-container">
        <Link to="/"> ShutterSquad </Link>
      </div>
      <div className="nav-items">
        <ul>
          {/* <li className="navlist-items"> <InternalLink to='guide' smooth={true}>User Guide</InternalLink></li> */}
          {/* <li className="navlist-items"><InternalLink to='about-us' smooth={true}>About Us</InternalLink></li> */}

          <li className="navlist-items"> <span onClick={()=>{
            navigate("/")
            window.scrollTo(0,0)
            window.scrollTo(0,800)
          }}>User Guide</span></li>
          <li className="navlist-items"><span onClick={()=>{
            navigate("/")
            window.scrollTo(0,0)
            window.scrollTo(0,2290)
          }}>About Us</span></li>
        <StyledButton><Button type="primary"><Link to='/register'>Register</Link></Button></StyledButton>
        <StyledButton><Button type="primary"><Link to='/login'>Login</Link></Button></StyledButton>
        </ul>
      </div>
      </nav>
     </NavWrapper>
   );
}
 
export default Navbar;