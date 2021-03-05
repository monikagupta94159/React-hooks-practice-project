import React, { useState } from "react";

const ShortCircuit = () => {
  const [text] = useState("");
  const [isError, setError] = useState(false);
  return (
    <>
      <h1>{text || "Hello World"}</h1>
      <h1>{text && "and operator"}</h1>
      <h2>{!text && "with not Hello World"}</h2>
      <button onClick={() => setError(!isError)}>Toggle Error</button>
      {isError ? (
        <p>this is error...</p>
      ): (
        <p>No error...</p>
      )}
    </>
  );
};

export default ShortCircuit;
