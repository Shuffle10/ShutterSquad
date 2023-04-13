import { Form, Input, Button} from "antd";
import { MailOutlined, KeyOutlined } from "@ant-design/icons";
import { Link} from "react-router-dom";
import styled from "styled-components";
import { loginPhotographer } from "../services/clientAPI";

const StyledForm = styled.div`
        background-color: #cfcfcf;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        h3{
            font-size: 32px;
        }

        .ant-form{
            width: 600px;
            background: white;
            margin: 60px 0px;
            padding: 40px;
            border: 2px solid #e5e5e5;

            h3{
                text-align: center;
                margin-bottom: 30px;
            }

            label{
                font-size:18px;
            }

            a{
                color: black;
            }

            // input{
            //     min-width: 400px
            // }
        }
    `

const layout = {
        wrapperCol: { span: 16 },
      };
    

const Login = () => {

    const handleLogin = async () => {
        const user = {email, password}
        try{
            await loginPhotographer(user);
            navigate('/')
            setLoading(false)
        }catch{
            console.log("Cannot connect to the server!")
        }
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return ( 
        <StyledForm>
            <Form
            // {...layout}
            >
            <h3>  Log In as a Photographer</h3>
                <Form.Item  rules={[{ required: true}]}>
                <Input prefix={<MailOutlined/>} value={email} onChange={e=>setEmail(e.target.value)}/>
                </Form.Item>
                <Form.Item rules={[{ required: true}]}>
                <Input.Password prefix={<KeyOutlined/>} value={password} onChange={e=>setPassword(e.target.value)}/>
                </Form.Item>
                <Form.Item>
                <Button block type="primary" htmlType="submit" onClick={handleLogin}>
                    Log In
                </Button>
                </Form.Item>
                <Form.Item>
                <p style={{textAlign:"center"}}> Don't have an account? <Link to="/register"> <b> Register </b></Link> Instead </p>
                </Form.Item>
            </Form>
        </StyledForm>
     );
}
        
 
export default Login;