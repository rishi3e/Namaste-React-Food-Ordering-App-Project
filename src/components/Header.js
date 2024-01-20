import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header flex justify-between bg-slate-200 shadow-sm mb-4">
      <div className="logo-container">
        <img className="logo w-24" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-3">
            {onlineStatus ? "Online Status: ✅" : "Online Status: 🔴"}
          </li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn px-3"
            onClick={() => {
              // btnName === "Login" ? "Logout" : "Login";
              // setBtnName(btnName);
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
