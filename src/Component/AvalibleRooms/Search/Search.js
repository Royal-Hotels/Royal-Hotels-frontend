import "./Search.css";
import { useEffect, useState } from "react";
import AvalibleRooms from "./AvalibleRooms";
import Reservations from "../Resevations/Reservations";

function Search() {
  //----- getAllBranches
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://movies-app-vkjw.onrender.com/allBranchs"
        );
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // function getLocationFromBranchId(id) {
  //   const branches = data;
  //   for (let branch of branches) {
  //     if (branch.branch_id === id) {
  //       return branch.location;
  //     }
  //   }
  // }

 // -------------------------------------------

  function getHotelLocationsArray(array) {
    let locationArray = [];
    array.map((item) => {
      if (!locationArray.includes(item.location)) {
        locationArray.push(item.location);
      }
    });
    return locationArray;
  }
  const locationArray = getHotelLocationsArray(data);

  //-------------------------------------------------------------
  const [selectedOption, setSelectedOption] = useState("all-locations");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  //-----------------------------------------------------------------
 
  //-----------------------------------------------------------------




  return (
    <>
     
      <form>
        <select
          id="selectLocation"
          name="selectLocation"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="all-locations">All locations</option>
          {locationArray.map((location) => {
            return (
              <>
                <option value={location} key={location}>
                  {location}{" "}
                </option>
              </>
            );
          })}
        </select>
      </form>
      <AvalibleRooms location={selectedOption} />
      <Reservations/>
    </>
  );
}

export default Search;
