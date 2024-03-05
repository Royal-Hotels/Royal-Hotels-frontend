import "./Search.css";
import { useEffect, useState } from "react";
import AvalibleRooms from "./AvalibleRooms";

function Search() {
  //----- getAllBranches
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
  const [selectedOption, setSelectedOption] = useState('none');

  const handleOptionChange = (event) => {
    
    setSelectedOption(event.target.value);
  };
  //-----------------------------------------------------------------

  //-----------------------------------------------------------------


  return (
    <>
      <form >
        <label htmlFor="selectLocation">Choose a Location:</label>
        <select
          id="selectLocation"
          name="selectLocation"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="Locations">All locations</option>
          {locationArray.map((location) => {
            return (
              <>
                 
                <option value={location} key={location}>{location} </option>
                
              </>
            );
          })}
        </select>

       

        <input  type="submit" value="Search" />
      </form>
      <AvalibleRooms location={selectedOption}/>
    </>
  );
}

export default Search;
