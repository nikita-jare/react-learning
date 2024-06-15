import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, RESTAURANT_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  //console.log(resInfo);

  const { cloudinaryImageId, cuisines, name, avgRating, sla } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);
  return (
    <div className="restaurant-menu">
      <h1 className="restaurant-name">{name}</h1>
      <div className="restaurant-info">
        <h4 className="cuisine">{cuisines.join(", ")}</h4>
        <h5 className="rating">{avgRating} stars</h5>
      </div>
      <h3 className="menu-heading">Menu</h3>
      <ul className="menu-items">
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="menu-item">
            <div className="menu-item-name">{item.card.info.name}</div>
            <div className="menu-item-description">
              {item.card.info.description}
            </div>
            <div className="menu-item-price">
              {item.card.info.price / 100}/- Rs
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="menu-item-image"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
