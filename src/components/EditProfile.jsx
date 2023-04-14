import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Spin, Form, Input, InputNumber, Radio, Select, Upload, Button, message } from "antd";
import { PlusOutlined,  } from '@ant-design/icons';
import { Link} from "react-router-dom";
import FormItem from "antd/es/form/FormItem";
import axios from "axios";
import { updateProfile } from "../services/clientAPI";
const {TextArea} = Input;



const PageWrapper = styled.div`
min-height: 100vh;
`
const SpinWrapper = styled.div`
    min-height: 100vh;
    min-width: 100vq;
    display: flex;
    align-items: center;
    justify-content: center;
`
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const FormWrapper = styled.div`
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
      width: 90%;
      background: rgba(0,0,0,0.3);
      margin: 30px auto;
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


const EditProfile = () => {
    const [profile, setProfile] = useState();
    const [fullName, setName] = useState('Saphal');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [province, setProvince] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [amount, setAmount] = useState('');
    const [basis, setBasis] = useState('');
    const [bio, setBio] = useState('');
    const[avatarData,setAvatarData] = useState();
    const[coverData,setCoverData] = useState();
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate()




    
    const {_id} = useParams()


    useEffect(() => {
        window.scrollTo(0, 0);
            async function fetchPhotographer() {
          const response = await axios.get(`http://localhost:8000/api/photographer/${_id}`);
          setProfile(response.data);
        }
        fetchPhotographer();
      }, [_id]);

      const handleSubmit = async ()=>{
        form.validateFields();
        setLoading(true)
        try{
            // const avatar = await uploadAvatar()
            // const coverPhoto = await uploadCover()
            const user = {fullName, age, phone, gender, specialization, address, province, amount, basis, bio}
            for (let value in user){
              if(user[value]==''){
                user[value] = profile[value]
              }
            }
            await updateProfile(user, _id);
            navigate("/", {
              state: { message: "Profile Updated!" },
            })
            console.log(user)
            setLoading(false)
        }catch(err){
            console.log("Cannot connect to the server!")
            console.log(err)
            setLoading(false)
        }
    }

      const updateAvatar = (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ss_images');
        setAvatarData(formData)
    }

    const updateCover = (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ss_images');
        setCoverData(formData)
    }

    const uploadAvatar = async () => {
            try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/dja7lj7ax/image/upload', avatarData);
            return response.data.url
            ;
            } catch (error) {
              console.error(error);
            }
      };

    const uploadCover = async () => {
        try {
          const response = await axios.post('https://api.cloudinary.com/v1_1/dja7lj7ax/image/upload', coverData);
          return response.data.url;
        } catch (err) {
          console.error(err);
        }
    }
    
      if (!profile) {
        return <PageWrapper> <SpinWrapper><Spin size="large"></Spin></SpinWrapper> </PageWrapper>
      }

    return ( 
        <PageWrapper>
                   <FormWrapper>
        <StyledForm>
            <Form
            form={form}
            {...layout}
            onFinish={handleSubmit}
            >
            <h3>  Update Profile </h3>
                <Form.Item label="Name"   name="fullName">
                <Input value={fullName} defaultValue={profile.fullName} onChange={(e)=>setName(e.target.value)}/>
                </Form.Item>
                <Form.Item label="Age"  name="age">
                <InputNumber min={16} max={80} value={age} defaultValue={profile.age} onChange={(e)=>setAge(e)}/>
                </Form.Item>
                <Form.Item label="Phone Number"  name="phone">
                <Input value={phone} defaultValue={profile.phone} onChange={(e)=>setPhone(e.target.value)} minLength={10} maxLength={10} name="phone"/>
                </Form.Item>
                <Form.Item label="Gender"  name="gender">
                <Radio.Group value={gender} defaultValue={profile.gender} onChange={(e)=>setGender(e.target.value)} name="gender">
                    <Radio value="Male"> Male </Radio>
                    <Radio value="Female"> Female </Radio>
                    <Radio value="Others"> Others </Radio>
                </Radio.Group>
                </Form.Item>
                <Form.Item label="Address"  name="address">
                <Input value={address} defaultValue={profile.address} onChange={(e)=>setAddress(e.target.value)} name="address"/>
                </Form.Item>
                <Form.Item label="Province"  name="province">
                <Select value={province} defaultValue={profile.province} onChange={(e)=>setProvince(e)}>
                    <Select.Option value="Sudurpaschim">Sudurpaschim</Select.Option>
                    <Select.Option value="Karnali">Karnali</Select.Option>
                    <Select.Option value="Lumbini">Lumbini</Select.Option>
                    <Select.Option value="Gandaki">Gandaki</Select.Option>
                    <Select.Option value="Bagmati">Bagmati</Select.Option>
                    <Select.Option value="Madhesh">Madhesh</Select.Option>
                    <Select.Option value="Koshi">Koshi</Select.Option>

                </Select>
                </Form.Item>
                <Form.Item label="Specialization"  name="specialization">
                <Select value={specialization} defaultValue={profile.specialization} onChange={(e)=>setSpecialization(e)}>
                    <Select.Option value="Photography">Photography</Select.Option>
                    <Select.Option value="Videography">Videography</Select.Option>
                    <Select.Option value="Both">Both</Select.Option>
                </Select>
                </Form.Item>
                <Form.Item label="Charge" name="charge" >
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
                    defaultValue={profile.amount}
                    />
                </Form.Item>
                    <Form.Item
                    name={["charge","basis"]}
                    noStyle
                    >
                    <Select placeholder="Basis" value={basis} onChange={(e)=>setBasis(e)} defaultValue={profile.basis}>
                    <Select.Option value="day">Day</Select.Option>
                    <Select.Option value="hour">Hour</Select.Option>
                </Select>
                </Form.Item>
                </Input.Group>
                </Form.Item>
                <FormItem label="Bio" name="bio" >
                <TextArea placeholder="300 characters or less" maxLength={300} defaultValue={profile.bio} value={bio} onChange={(e)=>setBio(e.target.value)}/>
                </FormItem>
                <Form.Item label="Upload" valuePropName="fileList" >
                <FormItem name="avatar" required={true}>
                <Upload action="/" beforeUpload={updateAvatar} accept="image/png, image/jpeg" listType="picture-card" maxCount={1}>
                    <div>
                    <PlusOutlined style={{color: "white"}} />
                    <div style={{marginTop: 8, color: "white"}}>New Profile Photo</div>
                    </div>
                </Upload>
                </FormItem>
                <FormItem name="coverPhoto" required={true}>
                <Upload action="/" beforeUpload={updateCover} accept="image/png, image/jpeg" listType="picture-card" maxCount={1}>
                    <div>
                    <PlusOutlined style={{color: "white"}}/>
                    <div style={{ marginTop: 8, color: "white"}}>New Cover Photo</div>
                    </div>
                </Upload>
                </FormItem>
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
                <Button block type="primary" htmlType="submit" loading={loading}>
                    Update
                </Button>
                </Form.Item>
            </Form>
        </StyledForm>
        </FormWrapper>
        </PageWrapper>
     );
}
 
export default EditProfile;