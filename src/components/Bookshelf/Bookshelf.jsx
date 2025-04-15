import React from "react";
import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({
      title: "",
      author: "",
    });
  };

  return (
    <div className="bookshelfDiv">
      <form onSubmit={handleSubmit} className="form">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <label htmlFor="title"> Title: </label>
          <input
            className="padding"
            id="titleInput"
            name="title"
            type="text"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author"> Author: </label>
          <input
            className="padding"
            id="authorInput"
            name="author"
            type="text"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </div>
        <div className="bookCardsDiv">
          {books.map((book) => (
            <>
              <div className="bookCard">
                <h2>{book.title}</h2> <br /> <h3>by {book.author}</h3>
              </div>
            </>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Bookshelf;
