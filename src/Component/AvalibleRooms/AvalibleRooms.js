import "./AvalibleRooms.css";
import { useState, useEffect } from "react";
import roomImg from "./hotel-room.jpeg";
import Search from "./Search";

function AvalibleRooms(props) {
console.log(props.location)
  //-------------------------------
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await fetch("http://localhost:3002/allBranchs");
        const result = await response.json();

       
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

   
    fetchData();
  }, []); 


  function getLocationFromBranchId(id){
    const branches = data
    for(let branch of branches){
      if (branch.branch_id === id){
        return branch.location
      }
    }

  }
  

  //-------------------------------
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("http://localhost:3002/avalibale-rooms");
        const result = await response.json();

        setRooms(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRooms();
  }, []);

  const roomsArray = rooms && rooms.availableRoomIds ? rooms.availableRoomIds : [];
  console.log(roomsArray)
  return (
    <>
     
      <div className="room-container">
        {roomsArray.map((room, index, array) => {
          if(room.is_available &&  props.location==='none'){
            return (
              <div className="room--card" key={index}>
                <img src={roomImg} className="room-img" alt="room"></img>
                <span className="badge">{getLocationFromBranchId(room.branch_id)}</span>
                <div className="info--section">
                  <p className="price">
                    Price: <span className="bold">{room.price}</span> JD
                  </p>
                  <p className="capacity">
                    Capacity: <span className="bold">{room.capacity}</span>
                  </p>
                  
                </div>
              </div>
            );
          }
          if (room.is_available && getLocationFromBranchId(room.branch_id) === props.location) {
            return (
              <div className="room--card" key={index}>
                <img src={roomImg} className="room-img" alt="room"></img>
                <span className="badge">{getLocationFromBranchId(room.branch_id)}</span>
                <div className="info--section">
                  <p className="price">
                    Price: <span className="bold">{room.price}</span> JD
                  </p>
                  <p className="capacity">
                    Capacity: <span className="bold">{room.capacity}</span>
                  </p>
                  
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default AvalibleRooms;
