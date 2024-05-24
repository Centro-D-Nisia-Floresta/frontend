import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Sobre from "./pages/sobre/sobre";
import Contato from "./pages/contato/contato";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Cadastro from "./pages/cadastro/Cadastro";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
