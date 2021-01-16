import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize]=useState(window.innerWidth)
  useEffect(() => {
    console.log("UseEffect")
    window.addEventListener('resize' ,()=>setSize(window.innerWidth));
    // window.removeEventListener('resize',()=>setSize(window.innerWidth))

  },[]) 
  return <>
  <h2>Window Size</h2>
  <h3>{size}</h3>
  </>
};

export default UseEffectCleanup;
