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
                    <Link to={`/profile/${profile.id}`}>
                    <Card
                        hoverable
                        cover={
                        <img
                            alt="Cover Photo"
                            src={profile.coverPhoto}
                        />
                        }

                            actions={[
                                <> <DollarOutlined/>{profile.fees}/{profile.per}</>,
                                <>  <CameraOutlined style={{display: "inline"}}/>&nbsp;&nbsp;/&nbsp;&nbsp;<VideoCameraOutlined style={{display: "inline"}}/> <br/><span>{profile.specialization}</span></>,
                                <> <EnvironmentOutlined/>{profile.province}</>,
                                ]}
                    >
                        <Meta
                        avatar={<Avatar src={profile.avatar} />}
                        title={profile.name}
                        description={profile.location}
                        />
                    </Card>
                    </Link>
                    </StyledCard>
    </> );
}
 
export default ProfileCard;