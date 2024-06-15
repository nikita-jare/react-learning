import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { cloudinaryImageId, cuisines, name, avgRating, sla } =
    props?.resData?.info || {};
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={props.image ? props.image : CDN_URL + cloudinaryImageId}
      />
      <h2 className="restaurant-name">{props.image ? props.name : name}</h2>
      <p className="rating">{props.rating ? props.rating : avgRating}</p>
      <p className="cuisine">
        {props.image ? props.cuisine : cuisines.join(", ")}
      </p>
      <p className="delivery-time">
        {props.deliveryTime ? props.deliveryTime : sla.deliveryTime} mins
      </p>
    </div>
  );
};

export default RestaurantCard;
