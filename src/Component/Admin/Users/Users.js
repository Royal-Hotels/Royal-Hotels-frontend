import React, { useState, useEffect } from "react";
import axios from "axios";
function Users() {
  const [data, setData] = useState([]);

  const isAdmin = (boolean) =>{
    if(boolean){
        return "Yes"
    }else{
        return "No"
    }
  }
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://movies-app-vkjw.onrender.com/adminAllUsers"
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
    <>
      {data.map((ele) => {
        return (
          <div key={ele.user_id}>
            <p>User ID : {ele.user_id}</p>
            <p>User Name : {ele.username}</p>
            <p>User Name : {ele.email}</p>
            <p>User Phone : {ele.phone}</p>
            <p>Admin : {isAdmin(ele.is_admin)}</p>
          </div>
        );
      })}
    </>
  );
}

export default Users;
