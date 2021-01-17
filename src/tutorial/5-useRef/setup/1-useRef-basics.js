import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer=useRef(null);
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(refContainer.current.value)
  }
  useEffect(() => {
    console.log("Effect")
    console.log(refContainer.current);
    refContainer.current.focus();
  } )
  return <>
  <form className="form" >
    <div>
      <input type="text" ref={refContainer} />
      <button type="submit" onClick={submitHandler} >Submit</button>
    </div>
  </form>
 
  </>;
};

export default UseRefBasics;
