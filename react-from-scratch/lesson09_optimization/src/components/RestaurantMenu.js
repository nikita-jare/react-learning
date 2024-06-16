import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

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
