import { Form, Input, InputNumber, Radio, Select, Upload, Button} from "antd";
import { PlusOutlined,  } from '@ant-design/icons';
import { Link, useNavigate} from "react-router-dom";
import bannerImage from "/images/Banner/banner.jpeg"
import styled from "styled-components";
import { useState } from "react";
import { registerPhotographer } from "../services/clientAPI";
import FormItem from "antd/es/form/FormItem";
import axios from "axios";
// import cloudinary from "cloudinary/lib/cloudinary"


// cloudinary.config({
//     cloud_name: process.env.REACT_APP_CLOUD_NAME,
//     api_key: process.env.REACT_APP_API_KEY,
//     api_secret: process.env.REACT_APP_API_SECRET
// });


const {TextArea} = Input;


const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };



const FormWrapper = styled.div`
    background-image: url(${bannerImage});
    background-repeat: no-repeat;
    background-size: cover;
`

const StyledForm = styled.div`
    background-color: rgba(0,0,0,0.6); 
    display: flex;
    padding: 100px;
    justify-content: center;

    h3{
        font-size: 32px;
    }

    .ant-form{
        width: 700px;
        background: rgba(0,0,0,0.3);
        // margin: 60px auto;
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


        .ant-form-item-control-input-content{
            display: flex;
        }

    }
`
const RegisterPhotographer = () => {

    const navigate = useNavigate()

    const rules = [
        {
        required: true,
        message: 'This field is required',
        },
    ]



    const handleSubmit = async ()=>{
        form.validateFields();
        setLoading(true)
        const user = {fullName, age, email, password, phone, gender, specialization, address, province, amount, basis, bio, avatar, coverPhoto}
        console.log(user)
        try{
            await registerPhotographer(user);
            navigate('/', {state:{message: "Congratulation! You are a member of the squad!"}})
            setLoading(false)
        }catch{
            console.log("Cannot connect to the server!")
        }
    }

    const uploadAvatar = async (file) => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'ss_images');
            setLoading(true) 
            try {
              const response = await axios.post('https://api.cloudinary.com/v1_1/dja7lj7ax/image/upload', formData);
              setAvatar(response.data.url);
              setLoading(false)
            } catch (error) {
              console.error(error);
              message.error('Upload failed. Please try again later.');
              setLoading(false)
            }
      };

    

    const uploadCover = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ss_images');
        setLoading(true) 
        
        try {
          const response = await axios.post('https://api.cloudinary.com/v1_1/dja7lj7ax/image/upload', formData);
          setCoverPhoto(response.data.url);
          setLoading(false) 
        } catch (error) {
          console.error(error);
          message.error('Upload failed. Please try again later.');
          setLoading(false) 
        }
    }

    const removeAvatar = async () => {
    // const imageURL = avatar;
    // const publicId = "haha";
    //   cloudinary.v2.uploader.destroy(publicId, function(error,result) {
    //     console.log(result, error) })
    //     .then(resp => console.log(resp))
    //     .catch(_err=> console.log("Something went wrong, please try again later."));
    }

    const removeCover = async () => {
    //     const imageURL = avatar;
    //     const publicId = cloudinary.utils.publicId(imageURL);
    //   cloudinary.v2.uploader.destroy(imageURL, function(error,result) {
    //     console.log(result, error) })
    //     .then(resp => console.log(resp))
    //     .catch(_err=> console.log("Something went wrong, please try again later."));
    }


    const [fullName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [province, setProvince] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [amount, setAmount] = useState('');
    const [basis, setBasis] = useState('');
    const [bio, setBio] = useState('');
    const [avatar, setAvatar] = useState('')
    const [coverPhoto, setCoverPhoto] = useState('')
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm();


    return ( 
        <FormWrapper>
        <StyledForm>
            <Form
            form={form}
            {...layout}
            onFinish={handleSubmit}
            >
            <h3>  Register as a Photographer</h3>
                <Form.Item label="Name"  rules={rules} name="fullName">
                <Input value={fullName} onChange={(e)=>setName(e.target.value)}/>
                </Form.Item>
                <Form.Item label="Email" rules={rules} name="email">
                <Input name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Item>
                <Form.Item label="Password" rules={rules} name="password">
                <Input.Password name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Item>
                <Form.Item label="Age" rules={rules} name="age">
                <InputNumber min={16} max={80} value={age} onChange={(e)=>setAge(e)}/>
                </Form.Item>
                <Form.Item label="Phone Number" rules={rules} name="phone">
                <Input value={phone} onChange={(e)=>setPhone(e.target.value)} name="phone"/>
                </Form.Item>
                <Form.Item label="Gender" rules={rules} name="gender">
                <Radio.Group value={gender} onChange={(e)=>setGender(e.target.value)} name="gender">
                    <Radio value="Male"> Male </Radio>
                    <Radio value="Female"> Female </Radio>
                    <Radio value="Others"> Others </Radio>
                </Radio.Group>
                </Form.Item>
                <Form.Item label="Address" rules={rules} name="address">
                <Input value={address} onChange={(e)=>setAddress(e.target.value)} name="address"/>
                </Form.Item>
                <Form.Item label="Province" rules={rules} name="province">
                <Select value={province} onChange={(e)=>setProvince(e)}>
                    <Select.Option value="Sudurpaschim">Sudurpaschim</Select.Option>
                    <Select.Option value="Karnali">Karnali</Select.Option>
                    <Select.Option value="Lumbini">Lumbini</Select.Option>
                    <Select.Option value="Gandaki">Gandaki</Select.Option>
                    <Select.Option value="Bagmati">Bagmati</Select.Option>
                    <Select.Option value="Madhesh">Madhesh</Select.Option>
                    <Select.Option value="Koshi">Koshi</Select.Option>

                </Select>
                </Form.Item>
                <Form.Item label="Specialization" rules={rules} name="specialization">
                <Select value={specialization} onChange={(e)=>setSpecialization(e)}>
                    <Select.Option value="Photography">Photography</Select.Option>
                    <Select.Option value="Videography">Videography</Select.Option>
                    <Select.Option value="Both">Both</Select.Option>
                </Select>
                </Form.Item>
                <Form.Item label="Charge" name="charge" rules={rules}>
                <Input.Group compact>
                <Form.Item
                    name={["charge","amount"]}
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
                    name={["charge","basis"]}
                    noStyle
                    >
                    <Select placeholder="Basis" value={basis} onChange={(e)=>setBasis(e)}>
                    <Select.Option value="day">Day</Select.Option>
                    <Select.Option value="hour">Hour</Select.Option>
                </Select>
                </Form.Item>
                </Input.Group>
                </Form.Item>
                <FormItem label="Bio" name="bio">
                <TextArea placeholder="300 characters or less" maxLength={300} value={bio} onChange={(e)=>setBio(e.target.value)}/>
                </FormItem>
                <Form.Item label="Upload" valuePropName="fileList">
                <Upload action="/" beforeUpload={uploadAvatar} onRemove={removeAvatar} accept="image/png, image/jpeg" listType="picture-card" maxCount={1} >
                    <div>
                    <PlusOutlined style={{color: "white"}} />
                    <div style={{marginTop: 8, color: "white"}}>Profile Photo</div>
                    </div>
                </Upload>
                <Upload action="/" beforeUpload={uploadCover} onRemove={removeCover} accept="image/png, image/jpeg" listType="picture-card" maxCount={1}>
                    <div>
                    <PlusOutlined style={{color: "white"}}/>
                    <div style={{ marginTop: 8, color: "white"}}>Cover Photo</div>
                    </div>
                </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
                <Button block type="primary" htmlType="submit" loading={loading}>
                    Register
                </Button>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
                <p style={{color: "white"}}> Already have an account? <Link to="/login"> <b> Log In </b></Link> Instead </p>
                </Form.Item>
            </Form>
        </StyledForm>
        </FormWrapper>
     );
}
 
export default RegisterPhotographer;