import React from "react";
import '../index.css'

const ControlledInput = () => {
  const handleSubmit = () => {
    console.log("hello world");
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input type="text" name="firstName" id="firstName" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input type="text" name="email" id="email" />
          </div>
          <button type="submit">Add Person</button>
        </form>
      </article>
    </>
  );
};

export default ControlledInput;
