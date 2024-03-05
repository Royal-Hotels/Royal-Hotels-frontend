import React, { useState, useEffect } from "react";
import axios from "axios";

function AllReservations() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://movies-app-vkjw.onrender.com/adminAllRes"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (str) => {
    const newDate = str.split("T");
    return newDate[0];
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {Array.isArray(data) &&
        data.map((ele) => {
          return (
            <div key={ele.reservation_id}>
              <p>
                <span>Room Id: </span>
                {ele.room_id}
              </p>
              <p>
                <span>User Id: </span>
                {ele.user_id}
              </p>
              <p>
                <span>In Date: </span>
                {formatDate(ele.check_in_date)}
              </p>
              <p>
                <span>Out Date: </span>
                {formatDate(ele.check_out_date)}
              </p>
              <p>
                <span>Reservation id: </span>
                {ele.reservation_id}
              </p>
            </div>
          );
        })}
    </>
  );
}

export default AllReservations;
