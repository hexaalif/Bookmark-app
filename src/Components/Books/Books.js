import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Books.css";

const Books = ({ book }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [link, setLink] = useState("");

  const handleUpdateBookmark = (e) => {
    e.preventDefault();
    const updateBooks = { title, tags, link };
    console.log(book._id);

    fetch(`http://localhost:5000/books/${book._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateBooks),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("updatd added", data);
        alert("updated ur edit");
      });
    e.target.reset();
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/books/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("deleted");
    });
  };
  return (
    <div className="container">
      <div className="row">
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
            <div className="d-flex justify-content-evenly">
              <Button
                onClick={() => handleDelete(book._id)}
                variant="outline-primary"
              >
                Delete Bookmark
              </Button>
              <Button variant="outline-primary" onClick={handleShow}>
                Update Bookmark
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <form className="text-center" onSubmit={handleUpdateBookmark}>
                  <label className="pe-2" htmlFor="title">
                    <b>Title: </b>{" "}
                  </label>
                  <input
                    className="mt-3"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    required
                  />{" "}
                  <br />
                  <label className="pe-2" htmlFor="tags">
                    <b>Tags:</b>{" "}
                  </label>
                  <input
                    className="mt-3"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    type="tags"
                    required
                  />{" "}
                  <br />
                  <label className="pe-2" htmlFor="links">
                    <b>Link:</b>{" "}
                  </label>
                  <input
                    className="mt-3"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    type="links"
                    required
                  />{" "}
                  <br />
                  <input
                    onClick={handleClose}
                    type="submit"
                    value="update"
                    className="my-3 btn btn-info text-white fw-bold"
                  />
                </form>
              </Modal>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Books;
