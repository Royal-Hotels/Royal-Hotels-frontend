import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

 

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset the password mismatch message when the user starts typing
    setPasswordMismatch(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      // Set passwordMismatch to true and return early
      setPasswordMismatch(true);
      return;
    }

    try {
      // Make a POST request to your server endpoint
      const response = await axios.post('https://movies-app-vkjw.onrender.com/user', {
        username: formData.username,
        phone: formData.phone,
        email: formData.email,
        password_hash: formData.password,
      });

      console.log('Registration successful', response.data);

      // Set registrationSuccess to true upon successful registration
      setRegistrationSuccess(true);

      // You may want to redirect the user or perform other actions after successful registration
    } catch (error) {
      console.error('Registration failed', error.response.data);
      // Handle registration failure, show error messages, etc.
    }
  };

  

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        {passwordMismatch && <p style={{ color: 'red' }}>Passwords do not match</p>}
        <br />
        <button type="submit">Register</button>
      </form>
   {/* Render the Login component if registration is successful */}
   {registrationSuccess && (
        <p>
          Registration successful!{' '}
          <Link to="/login">Click here to log in</Link>
        </p>
      )}
    </div>
  );
  
};

export default Registration;
