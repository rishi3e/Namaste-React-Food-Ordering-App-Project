import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    // console.log("2");
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_MENU_API + resId);
    const restaurantMenu = await data.json();
    const restroMenu = restaurantMenu?.data;
    setresInfo(restroMenu);
  };

//   console.log("4");

  return resInfo;
};

export default useRestaurantMenu;
