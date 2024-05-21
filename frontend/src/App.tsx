import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './assets/components/footer/footer'
import Navbar from './assets/components/navbar/navbar'
import Home from './pages/home/home'
import Sobre from './pages/sobre/sobre'
import Contato from './pages/contato/contato'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <div className="min-h-[80vh]"> 

      <Routes>
            <Route path ="/" element={<Home/>} />
            <Route path ="/home" element={<Home/>} />
            <Route path ="/sobre" element={<Sobre/>} />
            <Route path ="/contato" element={<Contato/>} />
      </Routes>
      
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
