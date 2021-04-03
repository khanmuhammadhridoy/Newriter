import { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import "./Book.css";
const Book = ({ book }) => {
  const history = useHistory();
  const { auth, price, imageURL, _id, name } = book;
  const [loggedInUser] = useContext(UserContext);
  const handleBuy = (id) => {
    const newOrders = { ...loggedInUser, ...book };
    delete newOrders._id;
    fetch("https://newrite.herokuapp.com/addOrders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    history.push(`/orders`);
  };

  return (
    <div className="col-md-4">
      <div className="book">
        <img style={{ height: "300px" }} src={imageURL} alt="" />
        <div className="text text-left">
          <h3>{name}</h3>
          <p style={{ color: "gray" }}>{auth}</p>
        </div>
        <div className="d-flex justify-content-between">
          <h3>${price}</h3>
          <button onClick={() => handleBuy(_id)} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
