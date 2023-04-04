import { Steps} from "antd";
import styled from "styled-components";
import {HeartOutlined,DollarOutlined,LikeOutlined,CarryOutOutlined,CameraOutlined,SmileOutlined} from "@ant-design/icons";



const StepsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 200px;
`

const StyledSteps = styled.div`
    width: 900px;

    .ant-steps{
        align-items: space-between;
        gap: 50px;
    }

    .ant-steps-item-title{
        font-size: 28px;
    }
    .ant-steps-item-description{
        font-size: 20px;
    }
`
const WhyUs = () => {
    return ( 
<>
<StepsWrapper>
    <StyledSteps>
        <Steps
        direction="vertical"
        items={[
          {
            icon: <CarryOutOutlined />,
            title: 'Hassle-Free Booking',
            status: 'finish',
            description: "Simply select your photo shoot package in almost any city and a photographer will be assigned to you shortly.",
          },
          {
            icon: <CameraOutlined />,
            title: 'The Best Photographers',
            status: 'finish',
            description: "Our photographers are professionally selected to provide the best photo experience and results.",

          },
          {
            icon: <SmileOutlined />,
            title: 'Excellent Customer Experience',
            status: 'finish',
            description: "We understand that plans can change due to circumstances, we provide easy reschedule up-to 48 hours before your photoshoot",

          },
        ]}
        />
    </StyledSteps>
    <StyledSteps>
      <Steps
        direction="vertical"
        items={[
          {
            icon: <LikeOutlined/>,
            title: 'Great Photos',
            status: 'finish',
            description: "Our experienced editor team ensures that your photos are edited to the highest quality.",

          },
          {
            icon: <DollarOutlined />,
            title: 'Extra Cheap Prices',
            status: 'finish',
            description: "We provide you expert photographers and amazing photos, starting from just NRP 10,000 in 100+ cities and across all 7 provinces.",

          },
          {
            icon: <HeartOutlined />,
            title: 'Covid health-protocol',
            status: 'finish',
            description: "Most of our photographers have been vaccinated and we maintain safe distance during the photoshoot",

          },
        ]}
      />
    </StyledSteps>
    </StepsWrapper>
</>
     );
}
 
export default WhyUs;