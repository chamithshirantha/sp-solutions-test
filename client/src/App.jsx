import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Delivery from './pages/Delivery'


function App() {
 

  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/delivery" element={<Delivery/>} />
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
