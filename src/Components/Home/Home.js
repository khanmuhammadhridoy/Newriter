import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import Spinner from "react-bootstrap/Spinner";
import "./Home.css";
import Navigation from "../Navigation/Navigation";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://newrite.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="container text-center">
      <Navigation></Navigation>
      <div className="row">
        {books.length === 0 ? (
          <Spinner animation="grow" variant="primary" />
        ) : (
          books.map((book) => <Book key={book._id} book={book}></Book>)
        )}
      </div>
    </div>
  );
};

export default Home;
