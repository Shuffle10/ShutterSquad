import styled from "styled-components";
import { CameraOutlined, VideoCameraOutlined, DollarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Avatar,Card} from 'antd';
import {Link} from 'react-router-dom'
const { Meta } = Card;

const StyledCard = styled.div`

    .ant-card{
        width: 400px;
        height: 450px;
    }

    .ant-card-cover{
        width: 400px;
        height: 250px;
        img{
            height: 100%;
            object-fit: cover;
        }
    }
`

const ProfileCard = ({profile, loading}) => {
    return ( <>
                    <StyledCard>
                    <Link to={`/profile/${profile._id}`}>
                    <Card
                        hoverable
                        cover={
                        <img
                            alt="Cover Photo"
                            src={profile.coverPhoto}
                        />
                        }

                            actions={[
                                <> <DollarOutlined/>{profile.amount}/{profile.basis}</>,
                                <>  <CameraOutlined style={{display: "inline"}}/>&nbsp;&nbsp;/&nbsp;&nbsp;<VideoCameraOutlined style={{display: "inline"}}/> <br/><span>{profile.specialization}</span></>,
                                <> <EnvironmentOutlined/>{profile.province}</>,
                                ]}
                    >
                        <Meta
                        avatar={<Avatar src={profile.avatar} size={60}/>}
                        title={profile.fullName}
                        description={profile.address}
                        />
                    </Card>
                    </Link>
                    </StyledCard>
    </> );
}
 
export default ProfileCard;