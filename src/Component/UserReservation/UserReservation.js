import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UserReservation.css";


function UserReservation() {
    const [reservations, setReservations] = useState([]);
    const [editingReservation, setEditingReservation] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [deletingReservationId, setDeletingReservationId] = useState(null);
    const [userData, setUserData] = useState(null);


    const { user_id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {

                const usersResponse = await fetch("https://movies-app-vkjw.onrender.com/adminAllUsers");
                if (!usersResponse.ok) {
                    throw new Error(`HTTP error! Status: ${usersResponse.status}`);
                }

                const usersData = await usersResponse.json();
                const user = usersData.find((userData) => userData.user_id === parseInt(user_id, 10));
                setUserData(user);


                const response = await fetch(`https://movies-app-vkjw.onrender.com/usersRes/${user_id}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setReservations(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [user_id]);

    const handleEditClick = (reservation) => {
        setEditingReservation(reservation);
    };

    const handleSaveEdit = async (newCheckInDate, newCheckOutDate) => {
        try {
            const requestBody = {
                check_in_date: newCheckInDate,
                check_out_date: newCheckOutDate,
            };

            console.log('Request Payload:', JSON.stringify(requestBody));

            const response = await fetch(`https://movies-app-vkjw.onrender.com/usersRes/${editingReservation.reservation_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const updatedReservation = await response.json();
            setReservations((prevReservations) =>
                prevReservations.map((reservation) =>
                    reservation.reservation_id === updatedReservation?.reservation?.reservation_id
                        ? updatedReservation?.reservation
                        : reservation
                )
            );

            setEditingReservation(null);
        } catch (error) {
            console.error("Error updating reservation:", error);
        }
    };


    const handleDeleteClick = (reservationId) => {
        setDeletingReservationId(reservationId);
        setShowConfirmation(true);
    };

    const handleConfirmDelete = async () => {
        if (deletingReservationId) {
            await handleDelete(deletingReservationId);
            setDeletingReservationId(null);
            setShowConfirmation(false);
        }
    };

    const handleCancelDelete = () => {
        setDeletingReservationId(null);
        setShowConfirmation(false);
    };

    const handleDelete = async (reservationId) => {
        try {
            const response = await fetch(
                `https://movies-app-vkjw.onrender.com/usersRes/${user_id}/${reservationId}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Remove the deleted reservation from the state
            setReservations((prevReservations) =>
                prevReservations.filter(
                    (reservation) => reservation.reservation_id !== reservationId
                )
            );
        } catch (error) {
            console.error("Error deleting reservation:", error);
        }
    };


    return (
        <>
            <h1>Welcome back, {userData ? userData.username : user_id} 💖 Discover your reservations below: </h1>
            <table className="reservation-table">
                <thead>
                    <tr>
                        <th>Room ID</th>
                        <th>Check-In Date</th>
                        <th>Check-Out Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation) => (
                        <tr key={reservation.reservation_id}>
                            <td>{reservation.room_id || "N/A"}</td>
                            <td>
                                {new Date(reservation.check_in_date).toLocaleDateString()}
                            </td>
                            <td>
                                {new Date(reservation.check_out_date).toLocaleDateString()}
                            </td>
                            <td>
                                <button onClick={() => handleEditClick(reservation)}>Edit</button>
                                <button
                                    className="delete-button"
                                    onClick={() => handleDeleteClick(reservation.reservation_id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editingReservation && (
                <div className="edit-modal">
                    <h2>Edit Reservation</h2>
                    <label>
                        New Check-In Date:
                        <input
                            type="date"
                            value={editingReservation.check_in_date.split("T")[0]}
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(e) =>
                                setEditingReservation((prevReservation) => ({
                                    ...prevReservation,
                                    check_in_date: e.target.value + "T00:00:00.000Z",
                                }))
                            }
                        />
                    </label>
                    <label>
                        New Check-Out Date:
                        <input
                            type="date"
                            value={editingReservation.check_out_date.split("T")[0]}
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(e) =>
                                setEditingReservation((prevReservation) => ({
                                    ...prevReservation,
                                    check_out_date: e.target.value + "T00:00:00.000Z",
                                }))
                            }
                        />
                    </label>
                    <button
                        onClick={() =>
                            handleSaveEdit(
                                editingReservation.check_in_date,
                                editingReservation.check_out_date
                            )
                        }
                    >
                        Save
                    </button>
                    <button onClick={() => setEditingReservation(null)}>Cancel</button>
                </div>
            )}



            {showConfirmation && (
                <div className="confirmation-modal">
                    <h2>Are you sure you want to delete this reservation?</h2>
                    <button onClick={handleConfirmDelete}>Yes</button>
                    <button className="no" onClick={handleCancelDelete}>
                        No
                    </button>
                </div>
            )}



            {/* <ul>
                {reservations.map((reservation) => (
                    <li key={reservation.reservation_id}>
                        Room {reservation.room_id}: {new Date(reservation.check_in_date).toLocaleDateString()} to {new Date(reservation.check_out_date).toLocaleDateString()}
                    </li>
                ))}
            </ul> */}
        </>
    );
}

export default UserReservation;
