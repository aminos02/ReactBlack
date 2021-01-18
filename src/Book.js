import React from "react";

const Book = (book) => {
  const { img, title, author } = book;

  const clickHandler = (e) => {
    console.log(e.target);
    return alert("HHHHH I kill You");
  };

  const clickHandler2 = (par) => console.log(par);

  return (
    <article className="book" onMouseOver={() => clickHandler2(title)}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click Me Or I kill You
      </button>
      <button type="button" onClick={() => clickHandler2(title)}>
        Click Here
      </button>
    </article>
  );
};
export default Book;
