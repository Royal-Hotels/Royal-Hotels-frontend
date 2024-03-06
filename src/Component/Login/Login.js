import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSession from "../SessionProvider/SessionProvider";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState({
    success: null,
    message: "",
  });
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useSession();

  // const handleLogin = async () => {
  //     try {
  //         setLoading(true);
  //         const response = await fetch("https://movies-app-vkjw.onrender.com/login", {
  //             method: "POST",
  //             headers: {
  //                 "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify({ email, password }),
  //         });

  //         if (response.ok) {
  //             const jsonData = await response.json();
  //             setLoginStatus({ success: true, message: "Login successful" });

  //             if (jsonData.is_admin) {
  //                 navigate("/admin-page");
  //             } else if (jsonData.user_id) {
  //                 navigate(`/res/${jsonData.user_id}`);
  //             } else {
  //                 console.error("User ID is missing in the server response.");;
  //             }
  //         } else {
  //             const errorData = await response.json();
  //             setLoginStatus({ success: false, message: errorData.message });
  //             console.error(`Login failed: ${errorData.message}`);
  //         }
  //     } catch (error) {
  //         console.error("Error during login:", error);
  //         setLoginStatus({ success: false, message: "Failed to login. Please try again." });
  //     } finally {
  //         setLoading(false);
  //     }
  // };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const loginResult = await login(email, password);

      if (loginResult.success) {
        setLoginStatus({ success: true, message: "Login successful" });

        if (loginResult.data.is_admin) {
          navigate("/admin-page");
        } else if (loginResult.data.user_id) {
          navigate(`/res/${loginResult.data.user_id}`);
        } else {
          console.error("User ID is missing in the server response.");
        }
      } else {
        setLoginStatus({ success: false, message: loginResult.message });
        console.error(`Login failed: ${loginResult.message}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginStatus({
        success: false,
        message: "Failed to login. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = () => {
    return email.trim() !== "" && password.trim() !== "";
  };

  return (
    <div className="loginForm">
      <h1>Login Page</h1>
      <form className="login-form">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="pass">Password:</label>
          <input
            id="pass"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="button">
          <button
            type="button"
            onClick={handleLogin}
            disabled={!isFormValid() || isLoading}
          >
            {isLoading ? "Logging in..." : "Log in"}
          </button>
        </div>

        {loginStatus.message && (
          <div className={loginStatus.success ? "success" : "error"}>
            <p>{loginStatus.message}</p>
          </div>
        )}

        <Link to="/registration" className="register">
          Create new account
        </Link>
      </form>
    </div>
  );
}

export default Login;
