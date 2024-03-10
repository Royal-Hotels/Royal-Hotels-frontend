import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import useSession from "../../SessionProvider/SessionProvider";
import "./Booking.css";

const Booking = () => {
  const { roomId, userId } = useParams();
  const navigate = useNavigate();
  const { session } = useSession();
  const { user_id: user } = session || {};

  const initializeFormData = () => ({
    user_id: userId,
    room_id: roomId,
    check_in_date: "",
    check_out_date: "",
    payment_method: [],
  });

  const [formData, setFormData] = useState(initializeFormData());
  const [availableRooms, setAvailableRooms] = useState([]);

  useEffect(() => {
    const apiURL = `${process.env.REACT_APP_SERVER}/usersRooms`;

    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL);
        setAvailableRooms(response.data);
      } catch (error) {
        console.error("Error fetching available rooms:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
            ? [...prevData.payment_method, value]
            : prevData.payment_method.filter((method) => method !== value)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiURL = `${process.env.REACT_APP_SERVER}/usersRooms`;

      const response = await fetch(`${apiURL}/${user}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error creating reservation:", errorData);
      } else {
        const responseData = await response.json();
        console.log("Reservation created successfully:", responseData);
        navigate(`/res/${user}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="bookingForm">
      <div className="container">
        <h2>Reservation Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            User ID:
            <span>{formData.user_id}</span>
          </label>

          <label>
            Room ID:
            <span>{formData.room_id}</span>
          </label>

          <label>
            Check-in Date:
            <input
              type="date"
              name="check_in_date"
              onChange={handleInputChange}
              value={formData.check_in_date}
              required
            />
          </label>

          <label>
            Check-out Date:
            <input
              type="date"
              name="check_out_date"
              onChange={handleInputChange}
              value={formData.check_out_date}
              required
            />
          </label>

          <label className="paymentMethods">Payment Method: </label>
          <div className="parent">
            <div>
              <input
                type="checkbox"
                name="payment_method"
                value="visa"
                onChange={handleInputChange}
              />
              <span>Visa Card</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="payment_method"
                value="mastercard"
                onChange={handleInputChange}
              />
              <span>Master Card</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="payment_method"
                value="paypal"
                onChange={handleInputChange}
              />
              <span>PayPal</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="payment_method"
                value="cash"
                onChange={handleInputChange}
              />
              <span>Cash</span>
            </div>
          </div>

          <button type="submit">Submit Reservation</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
