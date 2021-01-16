import React, { useState } from "react";

const UseStateObject = () => {
  var [obj, setObject] = useState({ name: "amine", age: 21 });
  const Handler = () => {
    setObject({ ...obj, age: 20 });
  };
  return (
    <React.Fragment>
      <h2>{obj.name}</h2>
      <h2>{obj.age}</h2>
      <button type="button" onClick={Handler}>
        change Age
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
