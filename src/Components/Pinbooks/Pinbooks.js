import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Books from "../Books/Books";

const Pinbooks = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [link, setLink] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const books = { title, tags, link };

    fetch("http://localhost:5000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(books),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("new books added", data);
      });
    e.target.reset();
  };

  return (
    <div className="text-center my-5">
      <h3>Add New Bookmarks</h3>
      <form onSubmit={handleSubmit}>
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
        <button className="my-3 btn btn-info text-white fw-bold">
          Add bookmark
        </button>
      </form>
      
    </div>
  );
};

export default Pinbooks;
