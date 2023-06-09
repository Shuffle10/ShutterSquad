import styled from "styled-components";


const StyledRow = styled.div`
   .client-row{
      display: flex;
      justify-content: center;
      flex-wrap:wrap;
      align-items: center;
      gap: 3vw;
   }

   img{
      height: 7vw;
   }
`

const Clients = () => {
    return ( 
     <>
     <StyledRow>
     <div className="client-row">
        <img src={`${import.meta.env.BASE_URL}/images/Clients/1.png`}></img>
        <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"></img>
        <img src={`${import.meta.env.BASE_URL}/images/Clients/3.png`}></img>
        <img src={`${import.meta.env.BASE_URL}/images/Clients/4.png`}></img>
        <img src="https://www.freepnglogos.com/uploads/chanel-logo-emblem-1.jpg"></img>
        <img src="https://www.freepnglogos.com/uploads/pepsi-png-logo/pepsi-logo-pepsi-symbol-meaning-history-png-logo-3.png"></img>
      </div>
     </StyledRow>
     </>
        );
}
 
export default Clients;