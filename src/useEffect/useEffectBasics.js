import React, { useState, useEffect } from "react";

const UseEffectBasic = () => {
  const [value, setValue] = useState(0);

  // hooks can't be inside condition will throw error

  // if (value > 0) {
  //   useEffect(() => {
  //     console.log("effect world");
  //     document.title = `newMessage (${value})`;
  //   });
  // }.

  useEffect(() => {
    console.log("effect world");
    if (value >= 1) {
      document.title = `newMessage (${value})`;
    }
  });

  console.log("hello world");
  return (
    <div>
      <h1>{value}</h1>
      <button type="button" onClick={() => setValue(value + 1)}>
        Click Me!
      </button>
    </div>
  );
};

export default UseEffectBasic;
