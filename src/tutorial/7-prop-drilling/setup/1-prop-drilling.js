import React, { useState } from "react";
import {data} from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [peoples, setPeoples] = useState(data);
  return (
    <>
      <List peoples={peoples} />
    </>
  );
};
const List = ({ peoples }) => {
  return (
    <>
      {peoples.map((people) => {
        return <People key={people.id}/>
      })}
    </>
  );
};
const People=({id,name})=>{
  return(
    <div>
      <h2>Item</h2>
    </div>
  )
}

export default PropDrilling;
