import React from "react";
import { NumericFormat } from "react-number-format";

const TextArea = (props) => {
  return (
    <textarea
      name=""
      rows="10"
      className={`focus:outline-none focus:border  py-2 px-4 border rounded ${
        props.classname
      } ${props.isInvalid ? "border-red-500" : "focus:border-blue-200"}`}
      {...props}
    ></textarea>
  );
};

export default TextArea;
