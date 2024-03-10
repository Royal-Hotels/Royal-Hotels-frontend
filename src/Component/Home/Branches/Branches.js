import "./Branches.css";
import { useEffect, useState } from "react";
import hotelPic from "./branchPic/10.jpg";

function Branchrs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER}/allBranchs`
        );
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function generateRandomRating() {
    const roundedNumber = Math.random() * (5 - 4) + 4;
    return Number(roundedNumber.toFixed(1));
  }

  function generateRandomPrice() {
    const random = Math.floor(Math.random() * (150 - 30) + 30);
    return Math.round(random / 5) * 5;
  }

  return (
    <div className="our-branches">
      <h1>Our branches</h1>
      <div className="container">
        {data.map((branch, index, array) => {
          return (
            <div key={branch.branch_id} className="hotelCard">
              <img
                src={`/assets/imgs/hotelBranches/${index + 1}.jpg`}
                alt={"hotel-pic"}
                className="hotel--img"
              ></img>
              <div className="info">
                <div className="first--line">
                  <i className="fa-solid fa-star"></i>
                  <span>{generateRandomRating()}</span>
                  <span className="bold">Jordan, {branch.location}</span>
                </div>
                <p className="light">{branch.branch_name}</p>
                <p className="price">
                  Avg price:{" "}
                  <span className="bold">{generateRandomPrice()}JD</span>/night
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Branchrs;
