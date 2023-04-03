import { Form, Input, InputNumber, Radio, Select, Upload, Button} from "antd";
import { PlusOutlined,  } from '@ant-design/icons';
import { Link} from "react-router-dom";

import styled from "styled-components";


const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  };

const rules = [
    {
    required: true,
    message: 'This field is required',
    },
]

const RegisterPhotographer = () => {

    const StyledForm = styled.div`
        background: whitesmoke;
        display: flex;

        h3{
            font-size: 32px;
        }

        .ant-form{
            width: 40%;
            background: white;
            margin: 60px auto;
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

            .ant-form-item-control-input-content{
                display: flex;
            }
        }
    `



    const handleSubmit = ()=>{
        console.log("Submitted")
    }

    return ( 
        <StyledForm>
            <Form
            {...layout}
            >
            <h3>  Register as a Photographer</h3>
                <Form.Item label="Name" rules={rules}>
                <Input/>
                </Form.Item>
                <Form.Item label="Age" rules={rules}>
                <InputNumber  min={16} max={80}/>
                </Form.Item>
                <Form.Item label="Email" rules={rules}>
                <Input/>
                </Form.Item>
                <Form.Item label="Phone Number" rules={rules}>
                <Input/>
                </Form.Item>
                <Form.Item label="Gender" rules={rules}>
                <Radio.Group>
                    <Radio value="male"> Male </Radio>
                    <Radio value="female"> Female </Radio>
                    <Radio value="others"> Others </Radio>
                </Radio.Group>
                </Form.Item>
                <Form.Item label="Address" rules={rules}>
                <Input/>
                </Form.Item>
                <Form.Item label="Province" rules={rules}>
                <Select>
                    <Select.Option value="sudurpaschim">Sudurpaschim</Select.Option>
                    <Select.Option value="karnali">Karnali</Select.Option>
                    <Select.Option value="lumbini">Lumbini</Select.Option>
                    <Select.Option value="gandaki">Gandaki</Select.Option>
                    <Select.Option value="bagmati">Bagmati</Select.Option>
                    <Select.Option value="madhesh">Madhesh</Select.Option>
                    <Select.Option value="koshi">Koshi</Select.Option>

                </Select>
                </Form.Item>
                <Form.Item label="Specialization" rules={rules}>
                <Select>
                    <Select.Option value="photography">Photography</Select.Option>
                    <Select.Option value="videography">Videography</Select.Option>
                    <Select.Option value="both">Both</Select.Option>
                </Select>
                </Form.Item>
                <Form.Item label="Charge" rules={rules}>
                <Input.Group compact>
                <Form.Item
                    name={['charge', 'amount']}
                    noStyle
                    >
                <InputNumber
                    style={{
                        width: '30%',
                    }}
                    placeholder="Amount"
                    min={0}
                />
                </Form.Item>
                    <Form.Item
                    name={['charge', 'basis']}
                    noStyle
                    >
                    <Select placeholder="Basis">
                    <Select.Option value="day">Day</Select.Option>
                    <Select.Option value="hour">Hour</Select.Option>
                </Select>
                </Form.Item>
                </Input.Group>
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList" rules={rules}>
                <Upload action="/upload.do" listType="picture-card">
                    <div>
                    <PlusOutlined />
                    <div style={{marginTop: 8}}>Profile Photo</div>
                    </div>
                </Upload>
                <Upload action="/upload.do" listType="picture-card">
                    <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8}}>Cover Photo</div>
                    </div>
                </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                <Button block type="primary" htmlType="submit">
                    Register
                </Button>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                <p> Already have an account? <Link to="/login"> <b> Log In </b></Link> Instead </p>
                </Form.Item>
            </Form>
        </StyledForm>
     );
}
 
export default RegisterPhotographer;