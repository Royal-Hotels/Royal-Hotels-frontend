import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      const response = await axios.post(
        "https://movies-app-vkjw.onrender.com/register",
        {
          username: formData.username,
          phone: formData.phone,
          email: formData.email,
          password_hash: formData.password,
        }
      );

      console.log("Registration successful", response.data);

      setRegistrationSuccess(true);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed", error.response.data);
    }
  };

  return (
    <div className="createAccount">
      <h1>Registration</h1>
      <form className="labelHidden" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="a">Username:</label>
          <input
            id="a"
            placeholder="Enter your username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="b">Phone:</label>

          <input
            id="b"
            placeholder="Enter your phone number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="c">Email:</label>
          <input
            id="c"
            placeholder="Enter your email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="d">Password: </label>
          <input
            id="d"
            placeholder="Enter your password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="e">Confirm Password: </label>
          <input
            id="e"
            placeholder="Confirm your password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {passwordMismatch && (
          <p style={{ color: "red" }}>Passwords do not match</p>
        )}
        {/*  */}
        <div className="button">
          <button type="submit">Register</button>
        </div>
      </form>

      {registrationSuccess && (
        <p>
          Registration successful! You will be redirected to{" "}
          <Link to="/login">login</Link>.
        </p>
      )}
    </div>
  );
};

export default Registration;
