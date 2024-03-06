import "./Reservations.css";
import { useState, useEffect } from "react";

function Reservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://movies-app-vkjw.onrender.com/usersRes/2"
        );
        const result = await response.json();

        setReservations(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(reservations);

  return (
    <>
      <div className="reservations--container">
        <h2>My Reservations</h2>

        {reservations.map((item) => {
          return (
            <>
              <div className="reservations--card">
                <p>
                  from {item.check_in_date.slice(0, 10)} 
                  
                </p>
                <p> to {item.check_out_date.slice(0, 10)}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Reservations;
