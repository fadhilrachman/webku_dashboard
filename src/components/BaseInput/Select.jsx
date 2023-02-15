import React from "react";

const Select = (props) => {
  return (
    <select
      className={`focus:outline-none bg-white focus:border  py-2 px-4 border rounded ${
        props.classname
      } ${props.isInvalid ? "border-red-500" : "focus:border-blue-200"}`}
      {...props}
    >
      {props.children}
    </select>
  );
};

export default Select;
