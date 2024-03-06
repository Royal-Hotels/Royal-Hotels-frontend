import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Registration from "./Component/Registration/Registration";
import About from "./Component/About/About";
import API from "./Component/API/API"
import UserReservation from "./Component/UserReservation/UserReservation";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Admin from "./Component/Admin/Admin";
import Booking from "./Component/AvalibleRooms/Booking/Booking"
import { SessionProvider } from "./Component/SessionProvider/SessionProvider";
import AvalibleRooms from "./Component/AvalibleRooms/Search/AvalibleRooms";
import Search from "./Component/AvalibleRooms/Search/Search";


function App() {
  return (
    <SessionProvider>
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/royalFeatures" element={<API/>} />    
        <Route path="/rooms" element={<AvalibleRooms />} />
        <Route path="/search" element={<Search />} />
        <Route path="/res/:user_id" element={<UserReservation />} />
        <Route path="/admin-page" element={<Admin />}></Route>
        <Route path="/booking/:roomId/:userId" element={<Booking/>} />
      </Routes>
      <Footer />
    </>
    </SessionProvider>
  );
}

export default App;
