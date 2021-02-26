import React from "react";

const StateExampleCounter = () => {
  let [count, changeCount] = React.useState(0);

  const resetCount = () => {
    changeCount(0);
  };

  const changeCounter = () => {
    setTimeout(() => {
      changeCount(prevState => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <section style={{ margin: "4rem 0" }}>
      <h2>Regular Counter</h2>
      <h1>{count}</h1>
      <button type="button" onClick={() => changeCount(count + 1)}>
        Increase
      </button>
      <button
        type="button"
        onClick={() => (count > 0 ? changeCount(count - 1) : "")}
      >
        Decrease
      </button>
      <button type="button" onClick={() => resetCount()}>
        Reset
      </button>
      <h2>More complex counter</h2>
      <h1>{count}</h1>
      <button onClick={() => changeCounter()}>Click me!</button>
    </section>
  );
};

export default StateExampleCounter;
