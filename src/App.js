import "./App.css";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "./Component/Admin/Admin";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;