import { Alert } from 'antd';

const FlashMessage = ({content, closable}) => {

    
    return ( 
        <Alert message={content} closable type="success" style={{zIndex:1000, textAlign: 'center', fontSize: "20px"}}/>
    )
        }
 
export default FlashMessage;