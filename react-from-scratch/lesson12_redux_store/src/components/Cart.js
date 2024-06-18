import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    console.log("Add Product");
    dispatch(clearCart());
  };
  console.log(cart);
  return (
    <div className="border p-3 m-5 shadow-xl ">
      <div className="p-2 m-2 flex flex-wrap justify-center">
        <div className="w-3/4 border p-2 m-2 shadow-xl ">
          <div>
            <button
              className="align-right p-2 m-2 shadow-xl bg-purple-500 text-white rounded"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          </div>
          <ItemList itemCards={cart.products} />
        </div>
        <div className="w-3/4 border p-2 m-2 shadow-xl flex justify-between">
          <div className="p-2 m-2 font-bold text-2xl">Total Cart Amount:</div>
          <div className="p-2 m-2 font-bold text-2xl">₹ {cart.total}</div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
