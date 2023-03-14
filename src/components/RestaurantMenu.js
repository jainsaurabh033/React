import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import IMG_CON_URL from "./contants";
import Shimmer from "./Shimmer.js";

const RestaurantMenu = () => {
  const { resid } = useParams();
  //const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(resid);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restaurant id: {resid}</h1>
      <h2>{restaurant?.name}</h2>
      <img src={IMG_CON_URL + restaurant?.cloudinaryImageId} />
      <h3>{restaurant?.areaName}</h3>
      <h3>{restaurant?.city}</h3>
      <h3>{restaurant?.avgRating}</h3>
      <h3>{restaurant?.costForTwoMessage}</h3>
    </div>
  );
};

export default RestaurantMenu;
