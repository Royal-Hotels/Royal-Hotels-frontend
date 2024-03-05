import "./Header.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="rowOne">
          <Link className="logo" to="#">
            Royal Hotels<i class="fa-solid fa-crown"></i>
          </Link>

          <div>
            <Link to="#">Login</Link>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
}
export default Header;
