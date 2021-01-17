import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [peoples, setPeoples] = useState([]);
  const handlerSubmit = (e) => {
    e.preventDefault();
    if(email && firstName){
    const person = { id: new Date().getTime().toString(), firstName, email };
    setPeoples((peoples) => [...peoples, person]);
    setFirstName('');
    setEmail('');
    }
    // console.log(peoples)
  };
  return (
    <>
      <form className="form" onSubmit={handlerSubmit}>
        <div className="form-control">
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="Email">Email:</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {peoples.map((people) => (
        <div key={people.id} className="item">
          <h4>{people.firstName}</h4>
          <p>{people.email}</p>
        </div>
      ))}
    </>
  );
};

export default ControlledInputs;
