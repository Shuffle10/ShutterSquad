import { Form, Input, InputNumber, Radio, Select, Upload, Button} from "antd";
import { PlusOutlined,  } from '@ant-design/icons';
import { Link} from "react-router-dom";
import bannerImage from "/images/Banner/banner.jpeg"
import styled from "styled-components";
import { useState } from "react";
import { registerPhotographer } from "../services/clientAPI";


const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

const rules = [
    {
    required: true,
    message: 'This field is required',
    }
]

const FormWrapper = styled.div`
    background-image: url(${bannerImage});
    background-repeat: no-repeat;
    background-size: cover;
`

const StyledForm = styled.div`
    background-color: rgba(0,0,0,0.6);
    padding: 50px;
    
    display: flex;

    h3{
        font-size: 32px;
    }

    .ant-form{
        width: 40%;
        background: rgba(0,0,0,0.3);
        margin: 60px auto;
        padding: 40px;
        border-radius: 20px;
        border: 1px solid rgba(0,0,0,0.2);
        

        h3{
            text-align: center;
            margin-bottom: 30px;
            color: white;
        }

        label{
            font-size:18px;
            color: white;
        }

        input, .ant-input-number, .ant-select-selector, .ant-select{
            background: transparent;
            color: white;


            &::placeholder{
                color: rgba(255,255,255,0.5);
            }
        }

        .ant-form-item-control-input-content{
            display: flex;
        }

    }
`
const RegisterPhotographer = () => {

    const defaultValue = {
        name: "",
        email: "",
        number: "",
        address: "",
        gender: "",
    }


    const handleSubmit = async ()=>{
        setLoading(true)
        const user = {fullName, age, email, phone, gender, specialization, address, province, amount, basis}
        await registerPhotographer(user);
        setLoading(false)
    }

    const [fullName, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [province, setProvince] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [amount, setAmount] = useState('');
    const [basis, setBasis] = useState('');

    const [loading, setLoading] = useState(false)



    return ( 
        <FormWrapper>
        <StyledForm>
            <Form
            {...layout}
            >
            <h3>  Register as a Photographer</h3>
                <Form.Item label="Name" rules={rules}>
                <Input value={fullName} onChange={(e)=>setName(e.target.value)}/>
                </Form.Item>
                <Form.Item label="Age" rules={rules}>
                <InputNumber min={16} max={80} value={age} onChange={(e)=>setAge(e)}/>
                </Form.Item>
                <Form.Item label="Email" rules={rules}>
                <Input name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Item>
                <Form.Item label="Phone Number" rules={rules}>
                <Input value={phone} onChange={(e)=>setPhone(e.target.value)} name="phone"/>
                </Form.Item>
                <Form.Item label="Gender" rules={rules}>
                <Radio.Group value={gender} onChange={(e)=>setGender(e.target.value)} name="gender">
                    <Radio value="male"> Male </Radio>
                    <Radio value="female"> Female </Radio>
                    <Radio value="others"> Others </Radio>
                </Radio.Group>
                </Form.Item>
                <Form.Item label="Address" rules={rules}>
                <Input value={address} onChange={(e)=>setAddress(e.target.value)} name="address"/>
                </Form.Item>
                <Form.Item label="Province" rules={rules}>
                <Select value={province} onChange={(e)=>setProvince(e)}>
                    <Select.Option value="sudurpaschim">Sudurpaschim</Select.Option>
                    <Select.Option value="karnali">Karnali</Select.Option>
                    <Select.Option value="lumbini">Lumbini</Select.Option>
                    <Select.Option value="gandaki">Gandaki</Select.Option>
                    <Select.Option value="bagmati">Bagmati</Select.Option>
                    <Select.Option value="madhesh">Madhesh</Select.Option>
                    <Select.Option value="koshi">Koshi</Select.Option>

                </Select>
                </Form.Item>
                <Form.Item label="Specialization" rules={rules} name="specialization">
                <Select value={specialization} onChange={(e)=>setSpecialization(e)}>
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
                    name="amount"
                    value={amount} onChange={(e)=>setAmount(e)}
                    />
                </Form.Item>
                    <Form.Item
                    name={['charge', 'basis']}
                    noStyle
                    >
                    <Select placeholder="Basis" value={basis} onChange={(e)=>setBasis(e)}>
                    <Select.Option value="day">Day</Select.Option>
                    <Select.Option value="hour">Hour</Select.Option>
                </Select>
                </Form.Item>
                </Input.Group>
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList">
                <Upload action="/upload.do" listType="picture-card">
                    <div>
                    <PlusOutlined style={{color: "white"}} />
                    <div style={{marginTop: 8, color: "white"}}>Profile Photo</div>
                    </div>
                </Upload>
                <Upload action="/upload.do" listType="picture-card">
                    <div>
                    <PlusOutlined style={{color: "white"}}/>
                    <div style={{ marginTop: 8, color: "white"}}>Cover Photo</div>
                    </div>
                </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                <Button block type="primary" htmlType="submit" onClick={handleSubmit}>
                    Register
                </Button>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                <p style={{color: "white"}}> Already have an account? <Link to="/login"> <b> Log In </b></Link> Instead </p>
                </Form.Item>
            </Form>
        </StyledForm>
        </FormWrapper>
     );
}
 
export default RegisterPhotographer;