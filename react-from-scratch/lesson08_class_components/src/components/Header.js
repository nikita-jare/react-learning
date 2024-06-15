import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About us</Link>
          </li>

          <li>
            <Link to="/contact">Contact us</Link>
          </li>

          <li>Cart</li>
          <button
            className="login-button"
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
