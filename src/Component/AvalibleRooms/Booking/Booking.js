// Booking.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Booking() {
  const { roomId, userId } = useParams();

  // console.log('roomId:', roomId);
  // console.log('userId:', userId);

  const [formData, setFormData] = useState({
    user_id: userId,
    room_id: roomId,
    check_in_date: '',
    check_out_date: '',
    payment_method: [],
  });

  const [availableRooms, setAvailableRooms] = useState([]);

  useEffect(() => {
    axios.get('https://movies-app-vkjw.onrender.com/usersRooms')
      .then(response => setAvailableRooms(response.data))
      .catch(error => console.error('Error fetching available rooms:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedPaymentMethods = checked
        ? [...formData.payment_method, value]
        : formData.payment_method.filter(method => method !== value);

      setFormData({
        ...formData,
        [name]: updatedPaymentMethods,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const staticUserId = 6;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://movies-app-vkjw.onrender.com/usersRooms/${staticUserId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error creating reservation:', errorData);
      } else {
        const responseData = await response.json();
        console.log('Reservation created successfully:', responseData);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div>
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <span>{formData.user_id}</span>
        </label>
        <br />
        <label>
          Room ID:
          <span>{formData.room_id}</span>
        </label>

        <label>
          Check-in Date:
          <input type="date" name="check_in_date" onChange={handleInputChange} value={formData.check_in_date} required />
        </label>
        <br />
        <label>
          Check-out Date:
          <input type="date" name="check_out_date" onChange={handleInputChange} value={formData.check_out_date} required />
        </label>
        <br />
        <label>
          Payment Method:
          <div>
            <input type="checkbox" name="payment_method" value="visa" onChange={handleInputChange} />
            <span>Visa Card</span>
          </div>
          <div>
            <input type="checkbox" name="payment_method" value="mastercard" onChange={handleInputChange} />
            <span>Master Card</span>
          </div>
          <div>
            <input type="checkbox" name="payment_method" value="paypal" onChange={handleInputChange} />
            <span>PayPal</span>
          </div>
          <div>
            <input type="checkbox" name="payment_method" value="cash" onChange={handleInputChange} />
            <span>Cash</span>
          </div>
        </label>
        <br />
        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
}

export default Booking;
