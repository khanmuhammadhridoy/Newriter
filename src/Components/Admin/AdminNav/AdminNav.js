import React from "react";
import { Link } from "react-router-dom";
import "./AdminNav.css";

const AdminNav = () => {
  return (
    <div className="adminNav">
      <nav>
        <Link to="/admin">Manage Books</Link>
        <Link to="/addbooks">Add Books</Link>
      </nav>
    </div>
  );
};

export default AdminNav;
