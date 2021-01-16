import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text]=useState('aa')[0]


  return<>
   <h2>{!text || 'First World'}</h2>
   <h2>{text && "Second wordl"}</h2>
   </>
};

export default ShortCircuit;
