import styled from "styled-components";

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
        <img src="../../src/images/Clients/1.png"></img>
        <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"></img>
        <img src="../../src/images/Clients/3.png"></img>
        <img src="../../src/images/Clients/4.png"></img>
        <img src="https://www.freepnglogos.com/uploads/chanel-logo-emblem-1.jpg"></img>
        <img src="https://www.freepnglogos.com/uploads/pepsi-png-logo/pepsi-logo-pepsi-symbol-meaning-history-png-logo-3.png"></img>
      </div>
     </StyledRow>
     </>
        );
}
 
export default Clients;