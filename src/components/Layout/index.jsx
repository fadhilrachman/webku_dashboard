import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar/Menu";
const index = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className=" grid grid-cols-10  bg-slate-80">
        <Sidebar />
        <div className="p-5 bg-slate-100 col-span-8  ">{children}</div>
      </div>
    </div>
  );
};

export default index;
