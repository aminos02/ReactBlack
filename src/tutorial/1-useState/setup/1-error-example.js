import React from "react";

const ErrorExample = () => {
  var title = "Hello Aminos";
  const Handler = () => (title = "Hello Azzouz");
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" onClick={Handler} className="btn">
        Change Text
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
