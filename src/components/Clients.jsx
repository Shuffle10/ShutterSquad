import styled from "styled-components";
import image1 from "../../src/images/Clients/1.png"
import image3 from "../../src/images/Clients/3.png"
import image4 from "../../src/images/Clients/4.png"

const StyledRow = styled.div`
   .client-row{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
   }

   img{
      height: 100px;
   }
`

const Clients = () => {
    return ( 
     <>
     <StyledRow>
     <div className="client-row">
        <img src={image1}></img>
        <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"></img>
        <img src={image3}></img>
        <img src={image4}></img>
        <img src="https://www.freepnglogos.com/uploads/chanel-logo-emblem-1.jpg"></img>
        <img src="https://www.freepnglogos.com/uploads/pepsi-png-logo/pepsi-logo-pepsi-symbol-meaning-history-png-logo-3.png"></img>
      </div>
     </StyledRow>
     </>
        );
}
 
export default Clients;