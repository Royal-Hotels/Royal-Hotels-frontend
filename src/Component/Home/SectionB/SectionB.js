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
          {roomData.rooms.map((card, index) => {
            return (
              <div>
                <img src={`assets/imgs/royalRooms/${index + 1}.jpg`} alt="" />
                <h2>{card.type}</h2>
                <p>{card.info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SectionB;
