import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Books from "../Books/Books";
import Pinbooks from "../Pinbooks/Pinbooks";
import Search from "../Search/Search";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setReload(!reload);
      });
  }, [reload]);

  return (
    <div>
      <Pinbooks />
      <h3 className="text-center">Bookmarks</h3>
      <div className="griding container">
        {books.map((book) => (
          <Books key={book._id} book={book}></Books>
        ))}
      </div>
      <Search />
    </div>
  );
};

export default Home;
