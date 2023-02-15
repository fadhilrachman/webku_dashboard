import React from "react";
import { NumericFormat } from "react-number-format";

const RupiahFormat = (props) => {
  return (
    <NumericFormat
      className={`focus:outline-none focus:border  py-2 px-4 border rounded ${
        props.classname
      } ${props.isInvalid ? "border-red-500" : "focus:border-blue-200"}`}
      allowLeadingZeros
      thousandSeparator=","
      {...props}
    ></NumericFormat>
  );
};

export default RupiahFormat;
