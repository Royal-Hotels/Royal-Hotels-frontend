import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="A">
          <h3>Royal Hotels</h3>
          <div className="links">
            <Link to="https://www.facebook.com/" target="_blank">
              <i className="fab fa-facebook-f facebook"></i>
            </Link>
            <Link to="https://twitter.com/" target="_blank">
              <i className="fab fa-twitter twitter"></i>
            </Link>
            <Link to="https://www.youtube.com/" target="_blank">
              <i className="fab fa-youtube youtube"></i>
            </Link>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quisquam modi inventore nesciunt! Facere, sunt?
          </p>
        </div>
        <div className="B">
          <ul>
            <li>
              <Link to="#">
                <i className="fas fa-angle-double-right"></i>
                Important Link 1
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fas fa-angle-double-right"></i>
                Important Link 2
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fas fa-angle-double-right"></i>
                Important Link 3
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fas fa-angle-double-right"></i>
                Important Link 4
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fas fa-angle-double-right"></i>
                Important Link 5
              </Link>
            </li>
          </ul>
        </div>
        <div className="C">
          <div>
            <i className="fas fa-map-marker-alt"></i>
            Amman, Jordan, Inside The Sphinx, <br />
            Room Number 220
          </div>

          <div>
            <i className="far fa-clock"></i>
            Business Hours: From 10:00 To 18:00
          </div>

          <div>
            <i className="fas fa-phone-volume"></i>
            +962-7900000 <br />
            +962-7700000
          </div>
        </div>
      </div>
      <div className="copy-right">
        Made With <span>&hearts;</span> By Yaman
      </div>
    </div>
  );
}

export default Footer;
