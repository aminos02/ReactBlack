import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const change = (number) => {
    setTimeout(() => {
      setCounter((prevState) => (prevState + number) * Math.abs(number));
    }, 2000);
  };
  return (
    <>
      <h2>{counter}</h2>
      <button type="button" onClick={() => change(1)} className="btn">
        Increment
      </button>
      <button type="button" onClick={() => change(-1)} className="btn">
        Decrement
      </button>
      <button type="button" onClick={() => change(0)} className="btn">
        Reset
      </button>
    </>
  );
};

export default UseStateCounter;
