import "./Header.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import useSession from "../SessionProvider/SessionProvider";


function Header() {
  const { session, logout } = useSession();
  return (
    <div className="header">
      <div className="container">
        <div className="rowOne">
          <Link className="logo" to="#">
            Royal Hotels<i class="fa-solid fa-crown"></i>
          </Link>

          {/* <div>
            <Link to="/login">Login</Link>
          </div> */}

          {session ? (
            <div>
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login">Login</Link>
            </div>
          )}


        </div>
        <Navbar />
      </div>
    </div>
  );
}
export default Header;
