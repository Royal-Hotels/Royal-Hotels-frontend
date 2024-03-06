import "./HotelDesc.css";
import hotelpic from "./assets/Royal-Hotel.jpg";
function HotelDesc() {
  return (
    <>
      <div className="hotel-text">
        <div className="container">
          <div className="image">
            {" "}
            <img src={hotelpic} alt="No Img!" />
          </div>

          <p className="About--Section">
            Welcome to <span className="bold">Royal Hotels</span> , where luxury
            meets comfort, our hotel is a haven for travelers seeking a
            memorable and indulgent escape.Unwind and rejuvenate at our
            state-of-the-art spa and wellness center, where personalized
            treatments and expert therapists ensure a truly relaxing experience.
            Take a dip in our sparkling pool, work up a sweat in the fitness
            center, or simply unwind in our serene surroundings - the choice is
            yours.or those seeking versatile event spaces,{" "}
            <span className="bold">Royal Hotels</span> offers sophisticated
            venues for meetings, conferences, and celebrations. Our dedicated
            events team will work closely with you to ensure every detail is
            tailored to perfection, leaving you free to focus on the success of
            your occasion.
          </p>
        </div>
      </div>
    </>
  );
}

export default HotelDesc;
