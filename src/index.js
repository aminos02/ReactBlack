import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const book = {
  title: "Habits",
  author: "Hamouda be 9ouda",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._AC_SX184_.jpg",
};
function BookList() {
  return (
    <section className="booklist">
      <Book {...book} />
      <Book title={book.title} author={book.author} img={book.img} />
      <Book />
    </section>
  );
}

const Book = (arg1) => {
  console.log(arg1);
  return (
    <article className="book">
      <img src={arg1.img} alt="" />
      <h1>{arg1.title}</h1>
      <h4>{arg1.author}</h4>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
