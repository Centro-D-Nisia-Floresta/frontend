import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Sobre from "./pages/sobre/sobre";
import Contato from "./pages/contato/contato";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Cadastro from "./pages/cadastro/Cadastro";
import ListaCategoria from "./components/categorias/listaCategorias/ListaCategoria";
import DeletarCategoria from "./components/categorias/deletarCategorias/DeletarCategoria";
import FormCategoria from "./components/categorias/formcategorias/FormCategoria";
import FormServicos from "./components/servicos/formServico/FormServicos";
import ListaServicos from "./components/servicos/listarServico/ListaServicos";
import DeletarServico from "./components/servicos/deletarServico/DeletarServico";
import Perfil from "./pages/perfil/Perfil";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer/>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />

              <Route path="/categorias" element={<ListaCategoria />} />
              <Route path="/cadastroCategoria" element={<FormCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

              <Route path="/servicos" element={<ListaServicos />} />
              <Route path="/cadastroServico" element={<FormServicos />} />
              <Route path="/deletarServico/:id" element={<DeletarServico />} />
              <Route path="/editarServico/:id" element={<FormServicos />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
          </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;