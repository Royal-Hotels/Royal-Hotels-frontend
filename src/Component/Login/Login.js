import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState({ success: null, message: "" });
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const jsonData = await response.json();
                setLoginStatus({ success: true, message: "Login successful" });

                if (jsonData.userId) {
                    navigate(`/user-reservation/${jsonData.userId}`);
                } else {
                    console.error("User ID is missing in the server response.");
                }
            } else {
                const errorData = await response.json();
                setLoginStatus({ success: false, message: errorData.message });
                console.error(`Login failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error during login:", error);
            setLoginStatus({ success: false, message: "Failed to login. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    const isFormValid = () => {
        return username.trim() !== "" && password.trim() !== "";
    };

    return (
        <>
            <h1>Login Page</h1>
            <form className="login-form">
                <label>
                    UserName:
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>

                <br />

                <button
                    type="button"
                    onClick={handleLogin}
                    disabled={!isFormValid() || isLoading}
                >
                    {isLoading ? "Logging in..." : "Log in"}
                </button>

                {loginStatus.message && (
                    <div className={loginStatus.success ? "success" : "error"}>
                        <p>{loginStatus.message}</p>
                    </div>
                )}

                <p>
                    Don't have an account?<Link to="/registration">Register</Link> 
                </p>
            </form>
        </>
    );
}

export default Login;
