import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/mockData";
import { useState } from "react";

// let restaurantList = restaurantData;

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantData);

  return (
    <div className="body">
      <div className="search-container">
        <input className="search-input" type="text" />
        <button>Search</button>
      </div>
      <div className="filter-container">
        <button
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating >= 4.5)
            );
            console.log(listOfRestaurants);
          }}
        >
          Rating above 4.5
        </button>
      </div>
      <div className="restaurant-container">
        {/* Loop over and create cards dynamically using map */}
        {listOfRestaurants.map((res) => {
          return <RestaurantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
