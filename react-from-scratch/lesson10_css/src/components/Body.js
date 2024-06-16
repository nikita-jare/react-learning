import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState(" ");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  //fetch is provide by the browser
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=18.5642452&lng=73.7768511"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.success.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
    setFilteredRestaurants(
      json?.data?.success.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
  };

  const online = useOnlineStatus();
  if (!online) {
    return <h1>Looks like you are Offline, please check your network</h1>;
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  //this will be called first before useEffect's callback
  //body re-renders whenever aby state changes
  console.log("Body is rendered");
  console.log(listOfRestaurants);
  console.log(filteredRestaurants);

  return (
    <div>
      <div className="flex justify-center">
        <input
          className="border border-slate-50 shadow-xl w-3/4 p-2 ml-5 my-5 rounded bg-slate-100 "
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="border bg-purple-500 text-white shadow-xl p-2 rounded mx-2 my-5 "
          // Look into search - it sometimes give error
          onClick={() => {
            console.log(searchInput);

            const filteredData = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchInput.toLowerCase())
            );
            //console.log(filteredData);
            setFilteredRestaurants(filteredData);
            console.log(listOfRestaurants);
            console.log(filteredRestaurants);
          }}
        >
          Search
        </button>
        <button
          className="border bg-purple-500 shadow-l text-white p-2 rounded mx-2 my-5"
          onClick={() => {
            setFilteredRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating >= 4.5)
            );
            //console.log(listOfRestaurants);
          }}
        >
          Rating above 4.5
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* Loop over and create cards dynamically using map */}
        {filteredRestaurants.map((res) => {
          return (
            <Link
              key={res.info.id}
              to={"/restaurants/" + res.info.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <RestaurantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
