import "./AvalibleRooms.css";
import { useState, useEffect } from "react";
import roomImg from "../Search/RoomPic/hotel-room.jpeg";
import { Link, useNavigate } from "react-router-dom";
import useSession from "../../SessionProvider/SessionProvider";


function AvaliableRooms(props) {
  const { session } = useSession();
  console.log('Session in AvaliableRooms:', session);
  const user = session?.user_id;
  console.log('User in AvaliableRooms:', user);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://movies-app-vkjw.onrender.com/allBranchs"
        );
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function getLocationFromBranchId(id) {
    const branches = data;
    for (let branch of branches) {
      if (branch.branch_id === id) {
        return branch.location;
      }
    }
  }



  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch(
          "https://movies-app-vkjw.onrender.com/usersRooms"
        );
        const result = await response.json();

        setRooms(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRooms();
  }, []);

  const roomsArray = rooms.result || [];

  const handleRoomClick = (roomId) => {
    if (user) {
      navigate(`/booking/${roomId}/${user}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <div className="room-container">
        {roomsArray.map((room, index) => {
          if (room.is_available && props.location === "all-locations") {
            return (
              <Link
                to={user ? `/booking/${room.room_id}/${user}` : '/login'}
                key={index}
              >
                <div className="room--card">
                  <img src={roomImg} className="room-img" alt="room" />
                  <span className="badge">
                    {getLocationFromBranchId(room.branch_id)}
                  </span>
                  <div className="info--section">
                    <p className="price">
                      Price: <span className="bold">{room.price}</span> JD
                    </p>
                    <p className="capacity">
                      Capacity: <span className="bold">{room.capacity}</span>
                    </p>
                  </div>
                </div>
              </Link>
            );
          }
          if (
            room.is_available &&
            getLocationFromBranchId(room.branch_id) === props.location
          ) {
            return (
              <div
                className="room--card"
                key={index}
                onClick={() => handleRoomClick(room.room_id)}
              >
                <img src={roomImg} className="room-img" alt="room" />
                <span className="badge">
                  {getLocationFromBranchId(room.branch_id)}
                </span>
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

export default AvaliableRooms;
