import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then(user => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }
  return <h1 style={{ margin: "auto 2rem" }}>{user}</h1>;
};

export default MultipleReturns;
