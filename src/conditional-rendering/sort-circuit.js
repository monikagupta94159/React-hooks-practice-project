import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");

  return (
    <>
      <h1>{text || "Hello World"}</h1>
      <h1>{text && "and operator"}</h1>
      <h2>{!text && "with not Hello World"}</h2>
    </>
  );
};

export default ShortCircuit;
