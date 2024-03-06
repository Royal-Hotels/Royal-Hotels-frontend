import "./SectionB.css";
// import pic2 from "./assets/2.jpg";
// import pic3 from "./assets/3.jpg";
// import pic5 from "./assets/5.jpg";
// import pic6 from "./assets/6.jpg";
import roomData from "./data.json";
function SectionB() {
  return (
    <div class="secTwo">
      <div class="container">
        <h1 className="main-title">Our Royal Rooms</h1>
        <div className="contents">
          {roomData.rooms.map((card) => {
            return (
              <div>
                <img src={card.photo} alt="" />
                <h2>{card.type}</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Atque placeat ut corrupti magni dolore fugit
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SectionB;
