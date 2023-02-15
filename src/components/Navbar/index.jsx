import React from "react";
const index = () => {
  return (
    <div className="flex px-6   border justify-between items-center">
      <div className=" h-full pr-16 py-3">
        <h1 className="text-xl hover:underline hover:cursor-pointer">
          padil dahboard
        </h1>
      </div>
      <div>
        <div className="flex items-center  w-28 justify-around">
          <img
            src="https://picsum.photos/200/300"
            className="rounded-full bg-black h-8 w-8"
          ></img>
          <small>Fadhil</small>
          <i class="bi bi-caret-down-fill text-xs"></i>
        </div>
      </div>
    </div>
  );
};

export default index;
