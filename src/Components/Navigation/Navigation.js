import React, { useContext } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logo.png";
const Navigation = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <div className="navigation">
      <Link to="/">
        <img className="brand" src={logo} alt="" />
      </Link>
      <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/deals">Deals</Link>
        <Link to="/login">
          {loggedInUser.displayName === undefined
            ? "Login"
            : loggedInUser.displayName}
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
