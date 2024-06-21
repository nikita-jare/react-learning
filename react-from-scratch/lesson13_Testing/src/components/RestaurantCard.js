import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, cuisines, name, avgRating, sla } =
    props?.resData?.info || {};
  return (
    <div
      data-testid="restaurant-card"
      className="border p-2 m-2 shadow-xl rounded w-64 h-96 hover:scale-105 hover:bg-slate-100 dark:hover:bg-slate-900"
    >
      <img
        className="w-64 h-48 rounded"
        src={props.image ? props.image : CDN_URL + cloudinaryImageId}
      />
      <div className="flex justify-between mt-2">
        <h2 className="text-l font-bold m-1">
          {props.image ? props.name : name}
        </h2>
        <p className="text-sm font-bold text-green-500 m-1">
          {props.rating ? props.rating : avgRating}
        </p>
      </div>

      <p className="text-sm italic font-light text-wrap m-1">
        {props.image ? props.cuisine : cuisines.join(", ")}
      </p>
      <div className="flex justify-between mt-2 align-bottom">
        <p className="text-sm font-semibold m-1">
          {props.deliveryTime ? props.deliveryTime : sla.deliveryTime} mins
        </p>
      </div>
    </div>
  );
};

export const RestaurantCardWithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    console.log(props);
    return (
      <div>
        <label className="absolute text-white bg-black text-sm p-2 mt-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
