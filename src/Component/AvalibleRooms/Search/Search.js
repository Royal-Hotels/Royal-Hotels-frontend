import "./Search.css";
import { useEffect, useState } from "react";
import AvalibleRooms from "./AvalibleRooms";

function Search() {
  //----- getAllBranches
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
    <div className="roomFilter">
      <form className="filterForm">
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
    </div>
  );
}

export default Search;
