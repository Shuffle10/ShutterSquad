import Card from "antd/es/card/Card";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

const ContactCard = ({email, phone}) => {
    return (
         <>
          <Card title="Contact Me" bordered={false} style={{ width: 300 }}>
            <p style={{fontSize: "15px"}}><MailOutlined /> &nbsp;&nbsp;{email}</p>
            <p style={{fontSize: "15px"}}>  <PhoneOutlined/> &nbsp;&nbsp;{phone}</p>
        </Card>

    </> );
}
 
export default ContactCard;