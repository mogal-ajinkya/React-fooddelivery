import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../components/Config";
const restaurantMenu = (id)=>
{
    const [restaurantInfo, setrestaurantInfo] = useState(null);

    async function getMenuData() {
        const data = await fetch(
        FETCH_MENU_URL + id
        );  

    const json = await data.json();
    setrestaurantInfo(json?.data?.cards);
  }

  useEffect(() => {
    getMenuData();
  }, []);
  return restaurantInfo;
}

export default restaurantMenu;