import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("Hello Aminos");
  const Handler = () => {
    if (title === "Hello Aminos") {
      setTitle("hello Hamouda");
    } else {
      setTitle("Hello Aminos");
    }
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={Handler}>
        Change Text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
