import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import FindPhotographers from './components/FindPhotographers'
import RegisterPhotographer from './components/Register'
import Globalstyle from './components/GlobalStyle'
import Navbar from './components/Navbar'
import { Footer } from 'antd/es/layout/layout'
import { ConfigProvider } from 'antd'
import styled from 'styled-components'
import Login from './components/Login'

function App() {

  const StyledFooter = styled.div`
    .ant-layout-footer{
      text-align:center;
      background-color: rgb(213 210 207);
      font-size: 18px;
    }
  `

  return (

    <BrowserRouter>
    <Globalstyle/>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#1c5b85',
          }
        }}
        > 
      <div className="App">
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<RegisterPhotographer/>}/>
        </Routes>
        <StyledFooter>
        <Footer>
            Copyright &#169; Saphal Pant 2023. All Rights Reserved
        </Footer>
        </StyledFooter>
     </div>
     </ConfigProvider>
    </BrowserRouter>
  )
}

export default App
