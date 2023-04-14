import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import RegisterPhotographer from './components/Register'
import Globalstyle from './components/GlobalStyle'
import Navbar from './components/Navbar'
import { Footer } from 'antd/es/layout/layout'
import { ConfigProvider } from 'antd'
import styled from 'styled-components'
import Login from './components/Login'
import Profile from './components/Profile'
import ErrorPage from './components/ErrorPage'
import SearchResults from './components/SearchResults'
import useFetch from './hooks/useFetch'
import EditProfile from './components/EditProfile'






const StyledFooter = styled.div`
.ant-layout-footer{
  text-align:center;
  background-color: rgb(213 210 207);
  font-size: 18px;
}
`

function App() {



  const {data: profiles, loading} = useFetch();



  

  return (
    <BrowserRouter basename="/ShutterSquad">
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
          <Route path='/profile/:_id' element={<Profile/>}/>
          <Route path='/edit/:_id' element={<EditProfile/>}/>
          <Route path='/search' element={<SearchResults/>}/>
          <Route path='/search/:province' element={<SearchResults profiles={profiles} loading={loading}/>}/>
          <Route path='*' element={<ErrorPage/>}/>
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
