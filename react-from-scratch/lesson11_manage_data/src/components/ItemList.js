import { CDN_URL } from "../utils/constants";
const ItemList = ({ itemCards }) => {
  console.log(itemCards);
  return (
    <div>
      {itemCards.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b justify-center grid grid-cols-12"
        >
          <div className="font-semibold p-2 m-2 col-span-10">
            <div className="font-semibold col-span-10">
              {item.card.info.name}
            </div>
            <div className="font-medium col-span-10">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
              /-
            </div>
            <div className="italic my-1 font-thin justify-left col-span-10">
              {item.card.info.description}
            </div>
          </div>
          <div className="col-span-2">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-24 h-24"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
