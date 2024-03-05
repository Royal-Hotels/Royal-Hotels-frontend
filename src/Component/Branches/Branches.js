import "./Branches.css";
import { useEffect, useState } from "react";
import hotelPic from "./branchPic/hotel.webp"

function Branchrs() {
 
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await fetch("http://localhost:3002/allBranchs");
        const result = await response.json();

       
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

   
    fetchData();
  }, []); 

  function generateRandomRating(){
    const  roundedNumber =  (Math.random() * (5 -4)+4)
    return   Number(roundedNumber.toFixed(1));
  }

  function generateRandomPrice(){
   const random = Math.floor(Math.random() * (150 -30)+30)
   return Math.round(random / 5) * 5;
  }

  return (
    <>
      <h1 className="title">Our branches</h1>
      <div className="container">
        {data.map((branch, index, array) => {
          return (
            <div key={branch.branch_id} className="hotelCard">
              <img src={hotelPic} alt={"hotel-pic"} className="hotel--img"></img>
              <div className="lower-section">
                <div className="first--line">
                  <i className="fa-solid fa-star"></i>
                  <span>{generateRandomRating()}</span>
                  <p className="bold">Jordan, {branch.location}</p>
                </div>
                <p className="light">{branch.branch_name}</p>
                <p>Avg price: <span className="bold">{generateRandomPrice()}JD</span>/night</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Branchrs;
