import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import AdminNav from "./AdminNav/AdminNav";
import "./Admin.css";
const Admin = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://newrite.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  const handleDelete = (id) => {
    fetch(`https://newrite.herokuapp.com/deleteEvent/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="container">
      <Navigation></Navigation>
      <div className="row">
        <div className="col-md-3 adminNavPanel">
          <AdminNav></AdminNav>
        </div>
        <div className="col-md-9">
          <table className="table table-warning table-striped">
            <tr>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            {books.map((book) => (
              <tr key={book._id}>
                <td>{book.name}</td>
                <td>{book.auth}</td>
                <td>{book.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="btn btn-danger"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-file-x-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146 8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 1 1 .708-.708z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
