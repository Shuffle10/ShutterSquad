import styled from "styled-components";
import { CameraOutlined, VideoCameraOutlined, DollarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Avatar,Card} from 'antd';
import {Link} from 'react-router-dom'
const { Meta } = Card;

const StyledCard = styled.div`
    width: 400px;
`

const ProfileCard = ({profile}) => {
    return ( <>
                    <StyledCard>
                    <Link to={`/profile/${profile._id}`}>
                    <Card
                        hoverable
                        cover={
                        <img
                            alt="Cover Photo"
                            src={`${import.meta.env.BASE_URL}/images/Profile/Cover/1.jpg`}
                        />
                        }

                            actions={[
                                <> <DollarOutlined/>{profile.amount}/{profile.basis}</>,
                                <>  <CameraOutlined style={{display: "inline"}}/>&nbsp;&nbsp;/&nbsp;&nbsp;<VideoCameraOutlined style={{display: "inline"}}/> <br/><span>{profile.specialization}</span></>,
                                <> <EnvironmentOutlined/>{profile.province}</>,
                                ]}
                    >
                        <Meta
                        avatar={<Avatar src={`${import.meta.env.BASE_URL}/images/Profile/Avatar/1.jpg`}/>}
                        title={profile.fullName}
                        description={profile.address}
                        />
                    </Card>
                    </Link>
                    </StyledCard>
    </> );
}
 
export default ProfileCard;