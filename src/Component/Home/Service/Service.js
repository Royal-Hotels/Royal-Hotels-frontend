import "./Service.css";
import { Link } from "react-router-dom";
function Service() {
  return (
    <div class="services" id="services">
      <h2 class="main-title">SERVICES</h2>
      <div class="container">
        <div class="box">
          <i class="fa-solid fa-utensils"></i>
          <h3>Dinning</h3>
          <div class="info">
            <Link>Details</Link>
          </div>
        </div>
        <div class="box">
          <i class="fa-solid fa-wifi"></i>
          <h3>Technology</h3>
          <div class="info">
            <Link>Details</Link>
          </div>
        </div>
        <div class="box">
          <i class="fas fa-map-marked-alt"></i>
          <h3>Location</h3>
          <div class="info">
            <Link>Details</Link>
          </div>
        </div>
        <div class="box">
          <i class="fa-solid fa-people-roof"></i>
          <h3>Family Rooms</h3>
          <div class="info">
            <Link>Details</Link>
          </div>
        </div>
        <div class="box">
          <i class="fa-solid fa-chess-king"></i>
          <h3>Royal Suite</h3>
          <div class="info">
            <Link>Details</Link>
          </div>
        </div>
        <div class="box">
          <i class="fa-solid fa-star"></i>
          <h3>Special Services</h3>
          <div class="info">
            <Link>Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
