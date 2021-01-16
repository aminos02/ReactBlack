import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  var [arr, setArr] = useState(data);
  const Handler = (id) => {
    setTimeout(() => {
      setArr((people) => {
        var newPeople = people.filter((item) => item.id !== id);
        return newPeople;
      });
    }, 2000);
  };
  return (
    <React.Fragment>
      {arr.map((elem) => (
        <div key={elem.id} className="item">
          <h2>{elem.name}</h2>
          <button type="button" onClick={() => Handler(elem.id)}>
            Remove Me
          </button>
        </div>
      ))}
      <button type="button" className="btn" onClick={() => setArr([])}>
        Remove
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
