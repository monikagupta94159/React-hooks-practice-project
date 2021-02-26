import React , {Fragment}from "react";

const ErrorExample = () => {
 let title = 'random title';
const handlerClick = () => {
      title = 'hi morning';
      console.log(title);
}
  return (
    <Fragment>
          <h2>{title}</h2>
          <button type='button' onClick={handlerClick}>Change Title</button>
    </Fragment>
  )
};

export default ErrorExample;
