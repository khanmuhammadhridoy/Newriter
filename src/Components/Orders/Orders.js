import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../App";
import Navigation from "../Navigation/Navigation";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch("https://newrite.herokuapp.com/order?email=" + loggedInUser.email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [loggedInUser.email]);

  const handleDelete = (id) => {
    alert("order placed");
  };
  return (
    <div className="container text-right">
      <Navigation></Navigation>
      <table className="table table-success text-left table-striped">
        <tr>
          <th>Book Name</th>
          <th>Price</th>
        </tr>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>{order.name}</td>
            <td>{order.price}</td>
          </tr>
        ))}
      </table>

      <button onClick={() => handleDelete()} className="btn btn-info">
        Place Order
      </button>
    </div>
  );
};

export default Orders;
