import React from "react";
import axios from "axios";

function NewBranch() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const branch_name = e.target.Bname.value;
    const location = e.target.Blocation.value;
    const image_url = e.target.image_url.value;
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER}/adminNewBranch`,
        {
          branch_name,
          location,
          image_url,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="branchForm">
      <form className="labelHidden" onSubmit={handleSubmit}>
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
          <label htmlFor="image_url">Branch Image</label>
          <input
            placeholder="Enter Branch Image"
            type="text"
            id="image_url"
            name="image_url"
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
