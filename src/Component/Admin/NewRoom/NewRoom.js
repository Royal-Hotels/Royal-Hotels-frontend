import React, { useState, useEffect } from "react";
import axios from "axios";

function NewRoom() {
  const [branch, setBranch] = useState([]);
  const [room, setRoom] = useState({});
  const fetchBranch = async () => {
    try {
      const response = await axios.get("http://localhost:3000/allBranchs");
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
    };
    setRoom(newRoom); // Update room state
    console.log(newRoom.branchId); // Access branchId from updated state
    try {
      await axios.post(`http://localhost:3000/branches/${newRoom.branchId}`, {
        room_number: newRoom.roomNum,
        capacity: newRoom.roomCap,
        price: newRoom.roomPri,
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  useEffect(() => {
    fetchBranch();
  }, []);

  return (
    <div className="roomForm">
      <form onSubmit={handleSubmit}>
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
          <input type="submit" value="Add Room"></input>
        </div>
      </form>
    </div>
  );
}

export default NewRoom;
