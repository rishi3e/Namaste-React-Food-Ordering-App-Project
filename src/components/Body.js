import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const response = await data.json();
    // console.log(response);

    const restroAArray =
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    // console.log(restroAArray);
    setListOfRestaurant(restroAArray);
    setSearchedRestaurants(restroAArray);
  };

  if (onlineStatus !== true)
    return (
      <h1>
        Oops. Your internet connection has been lost. Please connect with
        Internet.{" "}
      </h1>
    );

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body bg-blue-50">
      <div className="filter flex bg-slate-300">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-txt border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn bg-green-100 px-4 py-2 m-4 rounded-lg"
            onClick={() => {
              const tempSearchedRestaurants = listOfRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setSearchedRestaurants(tempSearchedRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="filter-btn px-5 py-2 bg-stone-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((restro) => {
                return restro.info.avgRating > 4;
              });
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {searchedRestaurants.map((restro) => (
          <Link key={restro.info.id} to={"/restaurants/" + restro.info.id}>
            <RestaurantCard resData={restro} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
