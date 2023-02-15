import React from "react";

const index = ({ className, children }) => {
  return <div className={`bg-white  p-5  ${className}`}>{children}</div>;
};

export default index;
