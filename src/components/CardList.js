import { RES_BASE_URL } from "../utils/constants";

const CardList = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = props?.resData?.data;
  return (
    <div className="cardList">
      <img className="res-image" src={RES_BASE_URL + cloudinaryImageId} />
      <div className="res-details">
        <h3 className="res-name">{name}</h3>
        <p className="res-cuisine">{cuisines.join(", ")}</p>
        <div className="res-addtion-details">
          <div className="res-ratings">{avgRating} stars</div>
          <div className="dot">•</div>
          <div className="res-delivery-time">{deliveryTime} mins</div>
          <div className="dot">•</div>
          <div className="res-for-two">₹{costForTwo / 100} FOR TWO</div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
