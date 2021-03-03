import React, { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    // console.log("hello");
    window.addEventListener("resize", checkSize);
    return () => {
        //cleanup is very important otherwise oneach render useeffect is working which needs to be clear.
    //   console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <>
      <h1> UseEffect CleanUp</h1>
      <h2>Window Size</h2>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;
