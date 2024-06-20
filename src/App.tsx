import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Sobre from "./pages/sobre/sobre";
import ListarServico from "./components/servicos/listarServico/ListarServico";
import FormServicos from "./components/servicos/formServico/FormServicos";
import DeletarServico from "./components/servicos/deletarServico/DeletarServico";

import Navbar from "./components/header/NavBar";

import DeletarCategoria from "./components/categorias/deletarCategorias/DeletarCategoria";
import ListarCategorias from "./components/categorias/listaCategorias/ListarCategoria";
import Perfil from "./pages/perfil/Perfil";
import Cart from "./components/carrinho/cart/Cart";
import FormCategoria from "./components/categorias/formcategorias/FormCategoria";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/carrinho" element={<Cart />} />

            <Route path="/servicos" element={<ListarServico />} />
            <Route path="/cadastrarservico" element={<FormServicos />} />
            <Route path="/deletarservico/:id" element={<DeletarServico />} />
            <Route path="/editarservico/:id" element={<FormServicos />} />

            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
