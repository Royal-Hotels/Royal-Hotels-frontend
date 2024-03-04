import React, { useState } from "react";
import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState({ success: null, message: "" });
    const [isLoading, setLoading] = useState(false);

    const handleLogin = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:3018/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const jsonData = await response.json();
                setLoginStatus({ success: true, message: "Login successful" });
                console.log("Login successful", jsonData);
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

    return (
        <>
            <h1>Login Page</h1>
            <form className="login-form">
                <label>
                    UserName:
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>

                <br />

                <button type="button" onClick={handleLogin} disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Log in"}
                </button>

                {loginStatus.message && (
                    <div className={loginStatus.success ? "success" : "error"}>
                        <p>{loginStatus.message}</p>
                    </div>
                )}

                <p>
                    Don't have an account? <a href="#">Register</a>
                </p>
            </form>
        </>
    );
}

export default Login;
