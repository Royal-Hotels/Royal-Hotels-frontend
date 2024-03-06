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
import Booking from "./Component/AvalibleRooms/Booking/Booking";
import { SessionProvider } from "./Component/SessionProvider/SessionProvider";

function App() {
  return (
    <>
      <SessionProvider>
        <Header />
        {/* <Home /> Comment by Raghad */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/royalFeatures" element={<API />} />      this form me abdullah leave it here */}
          {/* <Route path="/rooms" element={<AvalibleRooms />} /> */}

          <Route path="/res/:user_id" element={<UserReservation />} />
          <Route path="/admin-page" element={<Admin />}></Route>
          <Route path="/booking" element={<Booking />}>
            {" "}
          </Route>
          {/* <Route path="/res/:user_id" element={ <SessionProvider> <UserReservation /> </SessionProvider> }/>
        <Route path="/admin-page" element={ <SessionProvider> <Admin /> </SessionProvider> }/> */}
        </Routes>
        <Footer />
      </SessionProvider>
    </>
  );
}

export default App;
