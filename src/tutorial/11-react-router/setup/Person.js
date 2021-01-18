import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name,setName]=useState('')
  const {id}=useParams()
  
  useEffect(() => {
    const people=data.find((person)=>person.id===parseInt(id))
    setName(people.name)
  }, [])
 
  return (
    <div>
      <h2>{name}</h2>
      <Link to='/People' className='btn'>Back To People</Link>
    </div>
  );
};

export default Person;
