import React, { useState } from "react";
import NewRoom from "./NewRoom/NewRoom";
import NewBranch from "./NewBranch/NewBranch";
import AllReservations from "./AllReservations/AllReservations";
import "./Admin.css";

function Admin() {
  const [showNewRoom, setShowNewRoom] = useState(false);
  const [showNewBranch, setShowNewBranch] = useState(false);
  const [showAllReservations, setShowAllReservations] = useState(true);
  const handleNewRoomClick = () => {
    setShowNewRoom(true);
    setShowNewBranch(false);
    setShowAllReservations(false);
  };

  const handleNewBranchClick = () => {
    setShowNewBranch(true);
    setShowNewRoom(false);
    setShowAllReservations(false);
  };

  const handleAllReservations = () => {
    setShowAllReservations(true);
    setShowNewBranch(false);
    setShowNewRoom(false);
  };

  return (
    <div className="admin">
      <div className="container">
        <div className="button">
          <button onClick={handleNewRoomClick}>New Room</button>
          <button onClick={handleNewBranchClick}>New Branch</button>
          <button onClick={handleAllReservations}>Active Reservations</button>
        </div>
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
