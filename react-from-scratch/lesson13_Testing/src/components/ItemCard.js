import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../utils/cartSlice";

const ItemCard = ({ item }) => {
  console.log("Item Card:", item);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);

  const handleAddProduct = (item) => {
    console.log("Add Product");
    dispatch(addProduct(item));
  };

  const handleRemoveProduct = (item) => {
    dispatch(removeProduct(item));
  };

  const getItemQuantity = (itemId) => {
    const product = cart.find((product) => product.card?.info?.id === itemId);
    return product ? product.quantity : 0;
  };

  return (
    <div
      key={item?.card?.info?.id}
      className="border-b p-10 justify-center grid grid-cols-12"
      data-testid="item-card"
    >
      <div className="font-semibold p-2 m-2 col-span-10">
        <div className="font-semibold col-span-10">
          {item?.card?.info?.name}
        </div>
        <div className="font-medium col-span-10">
          ₹
          {item?.card?.info?.price
            ? item?.card?.info?.price / 100
            : item?.card?.info?.defaultPrice / 100}
          /-
        </div>
        <div className="italic my-1 font-thin justify-left col-span-10">
          {item?.card?.info?.description}
        </div>
      </div>
      <div className="col-span-2 flex relative ">
        <img
          src={CDN_URL + item?.card?.info?.imageId}
          alt={item?.card?.info?.name}
          className="w-full"
        />
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center mt-4">
          {getItemQuantity(item?.card?.info?.id) > 0 ? (
            <div className="flex items-center space-x-2">
              <button
                className="border bg-white text-black shadow-xl py-2 px-6 rounded"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
              <span className="font-semibold bg-white text-black shadow-xl py-2 px-6 rounded">
                {getItemQuantity(item?.card?.info?.id)}
              </span>
              <button
                className="border bg-white text-black shadow-xl py-2 px-6 rounded"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="border bg-purple-500 text-white shadow-xl py-2 px-6 rounded"
              onClick={() => handleAddProduct(item)}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
