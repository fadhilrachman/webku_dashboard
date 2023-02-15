import React from "react";
const BaseInput = (props) => {
  // const { register, watch } = useForm();
  return (
    <input
      className={`focus:outline-none focus:border  py-2 px-4 border rounded ${
        props.classname
      } ${props.isInvalid ? "border-red-500" : "focus:border-blue-200"}`}
      {...props}
    ></input>
  );
};

export default BaseInput;
