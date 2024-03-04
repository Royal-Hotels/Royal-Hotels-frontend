import React from "react";
import axios from "axios";

function NewBranch() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const branch_name = e.target.Bname.value;
    const location = e.target.Blocation.value;
    try {
      const response = await axios.post(`http://localhost:3000/branches`, {
        branch_name,
        location,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="branchForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Bname">Branch Name</label>
          <input
            placeholder="Enter Branch Name"
            type="text"
            id="Bname"
            name="Bname"
          ></input>
        </div>
        <div>
          <label htmlFor="Blocation">Branch Location</label>
          <input
            placeholder="Enter Branch Location"
            type="text"
            id="Blocation"
            name="Blocation"
          ></input>
        </div>
        <div>
          <input type="submit" value="Add Branch"></input>
        </div>
      </form>
    </div>
  );
}

export default NewBranch;
