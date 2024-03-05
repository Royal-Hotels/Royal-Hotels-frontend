import React, { useState } from "react";
import NewRoom from "./NewRoom/NewRoom";
import NewBranch from "./NewBranch/NewBranch";
import AllReservations from "./AllReservations/AllReservations";
import Users from "./Users/Users";
import "./Admin.css";

function Admin() {
  const [showNewRoom, setShowNewRoom] = useState(false);
  const [showNewBranch, setShowNewBranch] = useState(false);
  const [showAllUsers, setShowAllUsers] = useState(false);
  const [showAllReservations, setShowAllReservations] = useState(true);

  const handleNewRoomClick = () => {
    setShowNewRoom(true);
    setShowAllUsers(false);
    setShowNewBranch(false);
    setShowAllReservations(false);
  };

  const handleNewBranchClick = () => {
    setShowNewBranch(true);
    setShowNewRoom(false);
    setShowAllUsers(false);
    setShowAllReservations(false);
  };

  const handleAllReservations = () => {
    setShowAllReservations(true);
    setShowNewBranch(false);
    setShowNewRoom(false);
    setShowAllUsers(false);
  };
  const handleAllUsers = () => {
    setShowAllReservations(false);
    setShowNewBranch(false);
    setShowNewRoom(false);
    setShowAllUsers(true);
  };

  return (
    <div className="admin">
      <div className="container">
        <div className="button">
          <button onClick={handleNewRoomClick}>New Room</button>
          <button onClick={handleNewBranchClick}>New Branch</button>
          <button onClick={handleAllUsers}>All Users</button>
          <button onClick={handleAllReservations} >Active Reservations</button>
 
        </div>
        {showAllUsers && <Users />}
        {showNewRoom && <NewRoom />}
        {showNewBranch && <NewBranch />}
        <div className="activeR">
          {showAllReservations && <AllReservations />}
        </div>
      </div>
    </div>
  );
}

export default Admin;
