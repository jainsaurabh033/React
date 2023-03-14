import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../components/contants";

const useRestaurant = (resid) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resid);
    const json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }

  return restaurant;
};

export default useRestaurant;
