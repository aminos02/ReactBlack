import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [people, setPeople] = useState({ firstName: "", email: "", age: "" });
  const [peoples, setPeoples] = useState([]);
  const handle = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setPeople({ ...people, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const person = { ...people, id: new Date().getTime().toString() };
    setPeoples([...peoples, person]);
    console.log(...peoples);
  };
  const remove = (id) => {
    const newPeoples = peoples.filter((people) => {
      return people.id !== id;
    });
    setPeoples(newPeoples);
    console.log(newPeoples);
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={people.firstName}
              onChange={handle}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={people.email}
              onChange={handle}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="number"
              id="age"
              name="age"
              value={people.age}
              onChange={handle}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {peoples.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <br></br>
              <p>{email}</p>
              <p>{age}</p>
              <button
                style={{ margin: "auto" }}
                type="button"
                className="btn"
                onClick={() => {
                  remove(id);
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
