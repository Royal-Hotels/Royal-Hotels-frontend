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
import Admin from "./Component/Admin/Admin";
import Booking from "./Component/AvalibleRooms/Booking/Booking"
import AvalibleRooms from "./Component/AvalibleRooms/Search/AvalibleRooms";
import Search from "./Component/AvalibleRooms/Search/Search";

//--------------------------------
import Main from "./Component/AvalibleRooms/Search/Main"

//--------------------------------
function App() {
  return (
    <>
    {/* <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} /> */}
        {/* <Route path="/royalFeatures" element={<API />} />      this form me abdullah leave it here */}
        {/* <Route path="/rooms" element={<Search />} />
        <Route path="/usersRooms/:roomId" element={<Booking/>} />
        <Route path="/res/:user_id" element={<UserReservation />} />
        <Route path="/admin-page" element={<Admin/>}></Route>
      </Routes>
      <Footer/> */}
      
      {/* Route for balquess */}
      <Routes>
      <Route path="/usersRooms/:roomId" element={<Booking/>} />
      </Routes>
      <Main/>
      {/* Route for balquess */}
      
    
      
      

    </>
  );
}

export default App;