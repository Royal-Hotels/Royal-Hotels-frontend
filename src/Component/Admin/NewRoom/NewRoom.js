import React, { useState, useEffect } from "react";
import axios from "axios";

function NewRoom() {
  const [branch, setBranch] = useState([]);
  const [room, setRoom] = useState({});
  const fetchBranch = async () => {
    try {
      const response = await axios.get(
        "https://movies-app-vkjw.onrender.com/allBranchs"
      );
      setBranch(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRoom = {
      roomNum: e.target.number.value,
      roomCap: e.target.capacity.value,
      roomPri: e.target.price.value,
      branchId: e.target.branch.value,
      image_url: e.target.image_url.value,
    };
    setRoom(newRoom); // Update room state
    console.log(newRoom.branchId); // Access branchId from updated state
    try {
      await axios.post(
        `https://movies-app-vkjw.onrender.com/adminNewRoom/${newRoom.branchId}`,
        {
          room_number: newRoom.roomNum,
          capacity: newRoom.roomCap,
          price: newRoom.roomPri,
          image_url: newRoom.image_url,
        }
      );
    } catch (error) {
      console.log(room);
      console.error("Error posting data:", error);
    }
  };

  useEffect(() => {
    fetchBranch();
  }, []);

  return (
    <div className="roomForm">
      <form className="labelHidden" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="branch">Branch</label>
          <select name="branch" id="branch" required>
            {branch.map((ele) => {
              return (
                <option key={ele.branch_id} value={ele.branch_id}>
                  {ele.branch_name}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor="number">Room Number</label>
          <input
            placeholder="Enter Room Number"
            type="number"
            id="number"
            name="number"
          ></input>
        </div>
        <div>
          <label htmlFor="capacity">Room Capacity</label>
          <input
            placeholder="Enter Room Capacity"
            type="number"
            id="capacity"
            name="capacity"
          ></input>
        </div>
        <div>
          <label htmlFor="price">Room Price</label>
          <input
            placeholder="Enter Room Price"
            type="number"
            id="price"
            name="price"
          ></input>
        </div>
        <div>
          <label htmlFor="image_url">Room Image</label>
          <input
            placeholder="Enter Room Image"
            type="text"
            id="image_url"
            name="image_url"
          ></input>
        </div>
        <div>
          <input type="submit" value="Add Room"></input>
        </div>
      </form>
    </div>
  );
}

export default NewRoom;
