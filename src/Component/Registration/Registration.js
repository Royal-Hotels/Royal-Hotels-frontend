import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const Registration = () => {
  const navigate = useNavigate();

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
    setPasswordMismatch(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordMismatch(true);
      return;
    }

    try {
      const response = await axios.post('https://movies-app-vkjw.onrender.com/register', {
        username: formData.username,
        phone: formData.phone,
        email: formData.email,
        password_hash: formData.password,
      });

      console.log('Registration successful', response.data);

      setRegistrationSuccess(true);
      navigate('/login');

    } catch (error) {
      console.error('Registration failed', error.response.data);
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

      {registrationSuccess && (
        <p>
          Registration successful!{' '}
          You will be redirected to <Link to="/login">login</Link>.
        </p>
      )}
    </div>
  );

};

export default Registration;
