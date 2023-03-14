import { IMG_CON_URL } from "./contants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravel,
}) => {
  return (
    <div className="w-60 p-2 m-2 shadow-md h-80">
      <img src={IMG_CON_URL + cloudinaryImageId} />
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravel} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
