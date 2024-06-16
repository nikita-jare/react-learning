import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  //Once button is clicked here - it will re-render the whole header component and not just the button
  const [buttonName, setButtonName] = useState("Login");

  // If there is no dependency array then useEffect is called after every render of the component.
  // but if the dependency array exists it changes the behaviour of the hook.
  // If dependency array is empty then useEffect is called only once when the component is mounted - initial render.
  // If dependency array is not empty then useEffect is called whenever the dependency array changes.
  useEffect(() => {
    console.log("Header rendered");
  }, [buttonName]);

  const online = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg bg-slate-50 dark:bg-slate-950">
      <div className="border shadow-xl">
        <img className="w-28 h-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 font-bold ">
          <li className="p-3">{online ? "Online 🟢" : "Offline 🔴"}</li>
          <li className="p-3">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>
          <li className="p-3">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About us
            </Link>
          </li>

          <li className="p-3">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact us
            </Link>
          </li>
          <li className="p-3">
            <Link
              to="/grocery"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Grocery
            </Link>
          </li>

          <li className="p-3">Cart</li>
          <button
            className="p-3 bg-purple-500 text-white shadow-xl rounded"
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
