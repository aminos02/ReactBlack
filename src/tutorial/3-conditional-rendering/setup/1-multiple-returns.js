import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        }
        else 
        {
          setLoading(false)
          setError(true)
          throw new Error(response.statusText)
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  if (loading) {
    return <h1>Is loading ...</h1>;
  }
  if (isError) {
    return <h1>Is Error!!!</h1>;
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;
