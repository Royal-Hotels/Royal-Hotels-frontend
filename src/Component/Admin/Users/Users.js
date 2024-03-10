import React, { useState, useEffect } from "react";
import axios from "axios";
function Users() {
  const [data, setData] = useState([]);

  const isAdmin = (boolean) => {
    if (boolean) {
      return "Yes";
    } else {
      return "No";
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}/adminAllUsers`
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="allUsers">
      {data.map((ele) => {
        return (
          <div key={ele.user_id}>
            <p>
              <span>User ID: </span>
              {ele.user_id}
            </p>
            <p>
              <span>User Name: </span>
              {ele.username}
            </p>
            <p>
              <span>Email: </span>
              {ele.email}
            </p>
            <p>
              <span>Phone Number: </span>
              {ele.phone}
            </p>
            <p>
              <span>Admin: </span>
              {isAdmin(ele.is_admin)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
