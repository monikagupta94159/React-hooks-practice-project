import React, { useState } from "react";

const StateExample = () => {
  let [text, setText] = useState("Random Title");
  const handleClick = () => {
    if (text === "Random Title") {
      console.log(setText)
      setText("Hello World")
    } else {
      setText("Random Title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" onClick={handleClick}>
        ChangeTitle
      </button>
    </React.Fragment>
  );
};

export default StateExample;
