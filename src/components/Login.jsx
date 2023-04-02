import { Form, Input, Button} from "antd";
import { KeyOutlined, MailOutlined} from '@ant-design/icons';
import { Link} from "react-router-dom";
import styled from "styled-components";

const StyledForm = styled.div`
        background: whitesmoke;
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

            // input{
            //     min-width: 400px
            // }
        }
    `

const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 16 },
      };
    

const Login = () => {

    return ( 
        <StyledForm>
            <Form
            {...layout}
            >
            <h3>  Log In as a Photographer</h3>
                <Form.Item label="Email" rules={[{ required: true}]}>
                <Input />
                </Form.Item>
                <Form.Item label="Password" rules={[{ required: true}]}>
                <Input.Password/>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                <Button block type="primary" htmlType="submit">
                    Log In
                </Button>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                <p> Don't have an account? <Link to="/login"> <b> Register </b></Link> Instead </p>
                </Form.Item>
            </Form>
        </StyledForm>
     );
}
        
 
export default Login;