import Navbar from "./components/NavBar";
import Menu from "./pages/Menu";
import ProductPage from "./pages/ProductPage";
import MainPage from "./pages/MainPage";

import { Routes, Route } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore";

import { Toaster } from "react-hot-toast";

function App() {
  const {theme} = useThemeStore();

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300" data-theme={theme}>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/mainPage" element={<MainPage/>}/>
      </Routes>

      <Toaster/>
    </div>
  )
}

export default App
