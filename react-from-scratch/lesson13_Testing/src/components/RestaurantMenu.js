import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <ShimmerMenu />;
  }

  const { cuisines, name, avgRating } = resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) =>
        res.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories);
  return (
    <div className="border p-3 m-5 shadow-xl ">
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
      <ul className="p-2 m-2 flex flex-wrap justify-center">
        {categories.map((category, index) => (
          <li
            key={category.card.card.title}
            className="w-3/4 border p-2 m-2 shadow-xl hover:bg-slate-100 dark:hover:bg-slate-900"
          >
            {/* This is now a controlled component after adding open */}
            <MenuCategory
              category={category.card.card}
              showItems={index === showIndex}
              setShowIndex={() =>
                setShowIndex(index === showIndex ? null : index)
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
