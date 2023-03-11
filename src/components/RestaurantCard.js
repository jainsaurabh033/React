import { IMG_CON_URL } from "./contants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravel,
}) => {
  return (
    <div className="card">
      <img src={IMG_CON_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravel} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
