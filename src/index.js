import React from "react";
import ReactDom from "react-dom";
import "./index.css";
function BookList() {
  return (
    <section class="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
var title = "Atomic Habits";
var author = "azzouz amin";
const Book = () => {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._AC_SX184_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
