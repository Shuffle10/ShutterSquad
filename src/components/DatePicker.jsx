import { Calendar, theme, Alert } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';



const AvailabilityCard = styled.div`
margin-top: 40px;
border-radius: 7px;
background-color: #a5e889;
padding: 10px;
`



const DatePicker = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [selectedDate, setSelectedDate] = useState('')
    
    const { token } = theme.useToken();

    const wrapperStyle = {
      width: "100%",
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
    };

    

    const handleDateSelect = (date) => {
      const fullDate = new Date(date)
      setSelectedDate(months[fullDate.getMonth()] +" " + fullDate.getDate()+ ", " +fullDate.getFullYear() + " " + `(${days[fullDate.getDay()]})`)
    }

    const handleDisableDate = (date) => {
      const userDate = new Date("2023-04-15")
      const selectedDate = new Date(date)


      if((userDate.getDate()==selectedDate.getDate())&&(userDate.getMonth()==selectedDate.getMonth())&&(userDate.getFullYear()==selectedDate.getFullYear())){
        return true
      }
      return false
    }
    
    return ( 
        <>
        <div style={wrapperStyle}>
        <Calendar defaultValue={""} fullscreen={false}  onSelect={handleDateSelect} disabledDate={handleDisableDate}/>
        </div>
        {(selectedDate!='')?<Alert  style={{marginTop:"40px"}} type='success' message={`Available: ${selectedDate}`}></Alert>:<></>}
        </>
     );
}
 
export default DatePicker;

