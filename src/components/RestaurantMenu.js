import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1516957&lng=79.0902124&restaurantId=644868"
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }
  return (
    <div>
      <h1>Restaurant id: {resid}</h1>
      <h2>{restaurant.name}</h2>
    </div>
  );
};

export default RestaurantMenu;
