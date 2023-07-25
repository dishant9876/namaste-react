import CardList from "./CardList";
import resObj from "../utils/restaurantData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const CardComponent = () => {
  const [restaurant, filterRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    filterRestaurant(jsonData?.data?.cards[2]?.data?.data?.cards);
  };

  if (restaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <button
        className="filterBtn"
        onClick={() => {
          const filteredData = restaurant.filter(
            (res) => res.data.avgRating > 4
          );
          filterRestaurant(filteredData);
          console.log("filtered res", filteredData);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="cardComponent">
        {restaurant.map((restaurant) => (
          <CardList key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </>
  );
};

export default CardComponent;
