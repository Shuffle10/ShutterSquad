import styled from "styled-components";
import { Empty } from "antd";

const ErrorWrapper = styled.div`
    min-height: 100vh;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    .ant-empty-description{
        color: white;
        h1{
            font-size: 60px
        }
    
        h2{
            font-size: 42px;
        }
    }

`

const ErrorPage = () => {
    return ( <>
    <ErrorWrapper>
    <Empty description={
        <>
        <h1>404 Error</h1>
        <h3>Page not found</h3>
        </>
    }/>;
        
    </ErrorWrapper>
    </> );
}
 
export default ErrorPage;