import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Registration from "./Component/Registration/Registration";
import About from "./Component/About/About";
// import AvalibleRooms from "./Component/AvalibleRooms/AvalibleRooms";
import UserReservation from "./Component/UserReservation/UserReservation";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import API from "./Component/API/API"
function App() {
  return (
     <API/>
    // <>
    
    // <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/registration" element={<Registration />} />
    //     <Route path="/about" element={<About />} />
    //     {/* <Route path="/royalFeatures" element={<API />} />      this form me abdullah leave it here */}
    //     {/* <Route path="/rooms" element={<AvalibleRooms />} /> */}
    //     <Route path="/res" element={<UserReservation />} />
    //   </Routes>
    //   <Footer/>
    // </>
  );
}

export default App;
