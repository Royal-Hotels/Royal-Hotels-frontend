import "./Navbar.css";
import { Link } from "react-router-dom";
import useSession from "../SessionProvider/SessionProvider";


function Navbar() {
  const { session } = useSession();
  return (
    <ul className="rowTwo">
      <li>
        <Link to="/home">
          <i className="fa-solid fa-house"></i>Home
        </Link>
      </li>
      <li>
        <Link to="">
          <i className="fa-solid fa-feather-pointed"></i>Royal Features
        </Link>
      </li>
      <li>
        <Link to="/search">
          <i className="fa-solid fa-bed"></i>Rooms
        </Link>
      </li>
      <li>
        {session ? (
          <Link to={`/res/${session.user_id}`}>
            <i className="fa-regular fa-calendar-check"></i>Your Reservation
          </Link>
        ) : null}
      </li>
      <li>
        <Link to="/about">
          <i className="fa-solid fa-info"></i>About
        </Link>
      </li>
    </ul>
  );
}
export default Navbar;
