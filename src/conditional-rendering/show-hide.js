import React, { useState, useEffect } from "react";

const ShowHideComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle button</button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  
  const checkSize = () => {
      setSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return (
      window.removeEventListener('resize',checkSize)
    )
  }, []);
  return (
    <>
      <div>
        <h1>Window Size</h1>
        <h1>{size}</h1>
      </div>
    </>
  );
};
export default ShowHideComponent;
