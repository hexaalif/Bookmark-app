import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Books from "../Books/Books";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  return (
    <div className="App my-5">
      <h3>Search Your Bookmarks</h3>
      <Form className="d-flex  w-50 mx-auto">
        <Form.Control
          type="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Search</Button>
      </Form>
      {books
        .filter((book) => {
          if (search == "") {
            return book;
          } else if (book.title.toLowerCase().includes(search.toLowerCase())) {
            return book;
          }
        })
        .map((book) => {
          return (
            <div className="container w-50 mx-auto my-5">
              <Card>
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    <i>Topic:</i> {book.tags}
                  </Card.Text>
                  <Card.Link href={book.link}>
                    <p>
                      <b>Page LInk</b>
                    </p>
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default Search;
