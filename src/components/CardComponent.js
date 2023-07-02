import CardList from "./CardList";
import resObj from "../utils/restaurantData";
import { useState } from "react";

const CardComponent = () => {
  const [restaurant, filterRestaurant] = useState(resObj);
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
