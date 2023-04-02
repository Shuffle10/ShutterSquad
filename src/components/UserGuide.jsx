import { SearchOutlined, EyeOutlined, CheckCircleOutlined, PhoneOutlined, CalendarOutlined } from "@ant-design/icons";
import { Steps } from "antd";
import { useState } from "react";
import styled from "styled-components";





const StyledSteps = styled.div`
    .ant-steps-item-title{
        font-size: 22px;
    }

    .ant-steps-item-description{
        font-size: 18px;
    }
`

const UserGuide = () => {


    return ( 
        <>
        <StyledSteps>
         <Steps

         items={[
            {
                title: 'Step 1',
                icon: <SearchOutlined/>,
                status: 'finish',
                description: "Find a photographer",
              },

              {
                title: 'Step 2',
                status: 'finish',
                icon: <EyeOutlined />, 
                description: "View their portfolio",
              },


              {
                title: 'Step 3',
                status: 'finish',
                icon: <CalendarOutlined/>, 
                description: "Check their availability",
              },

              {
                title: 'Step 4',
                status: 'finish',
                icon: <PhoneOutlined/>, 
                description: "Contact them!",
              },
         ]}
         >
            
        </Steps>             
        </StyledSteps>   
        </>
     );
}
 
export default UserGuide;