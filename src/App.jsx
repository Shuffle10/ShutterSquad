import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import FindPhotographers from './components/FindPhotographers'
import RegisterPhotographer from './components/RegisterPhotographer'
import Globalstyle from './components/GlobalStyle'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
      <div className="App">
      <Globalstyle/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/find' element={<FindPhotographers/>}/>
          <Route path='/register' element={<RegisterPhotographer/>}/>
        </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App
