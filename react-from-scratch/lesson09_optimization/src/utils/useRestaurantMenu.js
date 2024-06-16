import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  //we want to fetch data only once
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
