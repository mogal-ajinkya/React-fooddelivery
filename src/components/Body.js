import Restaurantcard from "./Restaurantcard";
import { restaurantList } from "./Config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShimmerHome from "./Shimmer";
import restaurantList from "./Config";

function filterData(searchTxt, allrestData) {
  const filteredData = allrestData.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchTxt)
  );
  return filteredData;
}

const Body = () => {
  const [searchTxt, setsearchTxt] = useState("");
  const [restaurantData, setrestaurantData] = useState([]);
  const [allrestData, setallrestData] = useState([]);
  // getRestaurant();
  useEffect(() => {
    //api call
    getRestaurant();
  }, []);

  async function getRestaurant() {
      data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.520430&lng=73.856743&page_type=DESKTOP_WEB_LISTING"
      );
    const json = await data.json();
    console.log(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setallrestData(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setrestaurantData(json?.data?.cards?.[1]?.data?.data?.cards);
    setrestaurantData(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(allrestData);
    console.log(restaurantData);
    // setallrestData(restaurantList);
    // setrestaurantData(restaurantList);
    // console.log(allrestData);
    // console.log(restaurantData.length);
  }

  console.log("first render");
  return restaurantData?.length === 0 ? (
    <ShimmerHome />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchTxt}
          onChange={(e) => {
            setsearchTxt(e.target.value.toLowerCase());
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            updated = filterData(searchTxt, allrestData);
            setrestaurantData(updated);
          }}
        >
          search
        </button>
      </div>

      <div className="restaurant-list">
        {!restaurantData ? (
          <h1>not found</h1>
        ) : (
          restaurantData.map((restaurant) => {
            {console.log(restaurant.id)}
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <Restaurantcard {...restaurant.info.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
