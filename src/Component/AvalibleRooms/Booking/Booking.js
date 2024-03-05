// Booking.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// ...

function Booking({ userId, roomId }) {
    const [formData, setFormData] = useState({
      user_id: userId,
      room_id: roomId,
      check_in_date: '',
      check_out_date: '',
      payment_method: '', // Add payment_method field
    });
  
    const [availableRooms, setAvailableRooms] = useState([]);
  
    useEffect(() => {
      // Fetch available rooms when the component mounts
      axios.get('http://localhost:3000/available-rooms')
        .then(response => setAvailableRooms(response.data))
        .catch(error => console.error('Error fetching available rooms:', error));
    }, []);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Make a POST request to create a new reservation
      axios.post(`http://localhost:3000/reservations/${formData.user_id}`, formData)
        .then(response => {
          console.log('Reservation created successfully:', response.data);
          // Optionally, you can redirect to a success page or update state accordingly
        })
        .catch(error => console.error('Error creating reservation:', error));
    };
  
    return (
      <div>
        <h2>Reservation Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Display user id */}
          <label>
            User ID:
            <span>{formData.user_id}</span>
          </label>
          <br />
          {/* Display room id */}
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
          {/* Payment Method Options */}
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
