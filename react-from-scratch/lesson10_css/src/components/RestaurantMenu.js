import ShimmerMenu from "./ShimmerMenu";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerMenu />;
  }

  const { cuisines, name, avgRating } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);
  return (
    <div className="border p-3 m-5 shadow-2xl">
      <div className="flex justify-between m-2">
        <h1 className="text-2xl font-bold m-2">{name}</h1>
        <h5 className="text-m font-bold text-green-500 m-2">
          {avgRating} stars
        </h5>
      </div>
      <h4 className="text-sm italic font-light text-wrap m-4">
        {cuisines.join(", ")}
      </h4>
      <h3 className="text-l font-bold m-2 p-2">Menu</h3>
      <ul className="p-2 m-2 flex flex-wrap">
        {itemCards.map((item) => (
          <li
            key={item.card.info.id}
            className="border p-2 m-2 shadow-xl w-full justify-between grid grid-cols-12"
          >
            <div className="font-semibold p-2 col-span-3">
              {item.card.info.name}
            </div>
            <div className="italic p-2 font-thin justify-left col-span-7">
              {item.card.info.description}
            </div>
            <div className="flex justify-between col-span-2">
              <div className="font-semibold p-3">
                {item.card.info.price / 100}/- Rs
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-24 h-24"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
