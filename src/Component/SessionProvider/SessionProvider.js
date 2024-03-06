// npm install react-cookie

import { createContext, useContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const SessionContext = createContext();

function SessionProvider({ children }) {
  // const SessionProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["session"]);
  const [session, setSession] = useState(cookies.session || null);

  useEffect(() => {
    if (!session) {
      removeCookie("session");
    } else {
      setCookie("session", session, { path: "/" });
    }
  }, [session, setCookie, removeCookie]);

  const login = async (email, password) => {
    try {
      const response = await fetch(
        "https://movies-app-vkjw.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const userData = await response.json();
        setSession(userData);
        return { success: true, data: userData };
      } else {
        const errorData = await response.json();
        console.error(`Login failed: ${errorData.message}`);
        return { success: false, message: errorData.message };
      }
    } catch (error) {
      console.error("Error during login:", error);
      return { success: false, message: "Failed to login. Please try again." };
    }
  };

  const logout = () => {
    removeCookie("session");
    setSession(null);
  };

  return (
    <SessionContext.Provider value={{ session, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
}

function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
}

export { SessionProvider, useSession as default };
