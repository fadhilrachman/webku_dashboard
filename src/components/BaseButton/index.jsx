import React from "react";

const index = (props) => {
  let className =
    props.variant == "base"
      ? "bg-white text-neutral-500 border rounded py-2 px-3 hover:opacity-90 "
      : props.variant == "delete"
      ? "bg-red-300 text-white rounded py-2 px-3 hover:opacity-90 "
      : "bg-sky-500 text-white rounded py-2 px-3 hover:opacity-90 ";
  className += props.classname || "";
  return (
    <button className={className} {...props}>
      {props.children || "Create Data"}
    </button>
  );
};

export default index;
